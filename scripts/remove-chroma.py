#!/usr/bin/env python3
# remove-chroma.py — Quita el fondo verde (chroma) de las mascotas pixel art
# y las guarda como PNG con transparencia real.
#
# Uso:  python3 scripts/remove-chroma.py
#
# Solo necesita Pillow. El fondo verde de estas imágenes es brillante
# (g >= 125 y g muy por encima de rojo/azul), mientras que los verdes
# propios del dibujo (p. ej. el cinturón del taekwondo) son más oscuros
# y quedan por debajo del umbral, así que se conservan.
import os
from PIL import Image

SRC_DIR = os.path.join(os.path.dirname(__file__), '..', 'assets', 'images')

# nombre de salida  ->  archivo original
ASSETS = {
    'camaron-software.png': 'codigoCamaron.jpeg',
    'camaron-running.png': 'runningcamaorn.jpeg',
    'camaron-calistenia.png': 'calisteniacamaron.jpeg',
    'camaron-taekwondo.png': 'taekwondocamaron.jpeg',
    'camaron-juegos.png': 'gamercamaron.jpeg',
    'camaron-musica.png': 'guitarraCamaron.jpeg',
}

GMIN = 125   # verde mínimo para considerar fondo
GDIFF = 25   # cuánto debe superar el verde al máximo de rojo/azul
MAX_HEIGHT = 160  # la mascota se muestra a 80px; 160px = 2x para pantallas retina


def is_background(r, g, b):
    return g >= GMIN and (g - max(r, b)) >= GDIFF


def strip_frame(im, max_lines=4, min_ratio=0.95, max_luma=70):
    """Elimina marcos oscuros de 1-2 px pegados a los bordes.

    Algunos originales traen un borde negro fino; no es verde, así que
    sobrevive al chroma y se ve como una línea. Se detecta cualquier
    borde opaco y oscuro que recorra casi toda la orilla y se vuelve
    transparente. No toca contenido que solo toca el borde en parte.
    """
    px = im.load()
    w, h = im.size

    def luma(r, g, b):
        return 0.299 * r + 0.587 * g + 0.114 * b

    def is_frame_line(points):
        opaque = dark = 0
        for x, y in points:
            r, g, b, a = px[x, y]
            if a > 0:
                opaque += 1
                if luma(r, g, b) < max_luma:
                    dark += 1
        return opaque >= len(points) * min_ratio and dark >= opaque * 0.9

    left, right, top, bottom = 0, w - 1, 0, h - 1
    while left < right and left < max_lines and is_frame_line(
        [(left, y) for y in range(top, bottom + 1)]
    ):
        left += 1
    while right > left and (w - 1 - right) < max_lines and is_frame_line(
        [(right, y) for y in range(top, bottom + 1)]
    ):
        right -= 1
    while top < bottom and top < max_lines and is_frame_line(
        [(x, top) for x in range(left, right + 1)]
    ):
        top += 1
    while bottom > top and (h - 1 - bottom) < max_lines and is_frame_line(
        [(x, bottom) for x in range(left, right + 1)]
    ):
        bottom -= 1

    if (left, right, top, bottom) != (0, w - 1, 0, h - 1):
        for x in range(w):
            for y in range(h):
                if x < left or x > right or y < top or y > bottom:
                    r, g, b, a = px[x, y]
                    px[x, y] = (r, g, b, 0)
    return im


def key_image(src_path, out_path):
    im = Image.open(src_path).convert('RGB')
    w, h = im.size
    px = list(im.getdata())

    rgba = []
    for (r, g, b) in px:
        if is_background(r, g, b):
            rgba.append([r, g, b, 0])
        else:
            rgba.append([r, g, b, 255])

    # Despill: en los píxeles opacos que tocan el borde transparente,
    # recorta el canal verde sobrante para eliminar el halo.
    for i in range(w * h):
        if rgba[i][3] == 0:
            continue
        x, y = i % w, i // w
        touches_clear = False
        for nx, ny in ((x - 1, y), (x + 1, y), (x, y - 1), (x, y + 1)):
            if 0 <= nx < w and 0 <= ny < h and rgba[ny * w + nx][3] == 0:
                touches_clear = True
                break
        if touches_clear:
            r, g, b, a = rgba[i]
            cap = max(r, b)
            if g > cap:
                rgba[i] = [r, cap, b, a]

    out = Image.new('RGBA', (w, h))
    out.putdata([tuple(v) for v in rgba])
    strip_frame(out)
    # Reduce a 3x del tamaño de visualización (mascota a 80px) para no servir
    # imágenes de ~400px que nadie ve a tamaño completo.
    if out.height > MAX_HEIGHT:
        w2 = round(out.width * MAX_HEIGHT / out.height)
        out = out.resize((w2, MAX_HEIGHT), Image.LANCZOS)
    out.save(out_path, optimize=True)
    return out.size


def main():
    for out_name, src_name in ASSETS.items():
        src = os.path.normpath(os.path.join(SRC_DIR, src_name))
        dst = os.path.normpath(os.path.join(SRC_DIR, out_name))
        w, h = key_image(src, dst)
        print(f'{src_name} -> {out_name}  ({w}x{h})')


if __name__ == '__main__':
    main()
