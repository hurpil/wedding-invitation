#!/usr/bin/env python3
from pathlib import Path
from PIL import Image, ImageOps
import argparse


def resize_single_image(
    input_path: Path,
    max_width: int = 1920,
    jpeg_quality: int = 82,
):
    if not input_path.exists():
        raise FileNotFoundError(f"파일이 없습니다: {input_path}")

    output_path = input_path.with_name(f"resize_{input_path.stem}.jpg")

    with Image.open(input_path) as img:
        img = ImageOps.exif_transpose(img)

        w, h = img.size
        if w > max_width:
            new_h = int(h * max_width / w)
            img = img.resize((max_width, new_h), Image.Resampling.LANCZOS)

        if img.mode != "RGB":
            img = img.convert("RGB")

        img.save(
            output_path,
            format="JPEG",
            quality=jpeg_quality,
            optimize=True,
            progressive=True,
        )

    print(f"saved: {output_path}")


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("input_file", help="입력 이미지 파일")
    parser.add_argument("--max-width", type=int, default=1920)
    parser.add_argument("--jpeg-quality", type=int, default=82)
    args = parser.parse_args()

    resize_single_image(
        input_path=Path(args.input_file),
        max_width=args.max_width,
        jpeg_quality=args.jpeg_quality,
    )


if __name__ == "__main__":
    main()