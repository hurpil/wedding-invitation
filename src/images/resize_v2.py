#!/usr/bin/env python3
from pathlib import Path
from PIL import Image, ImageOps
import argparse


def resize_single_image(
    input_path: Path,
    max_width: int = 1920,
    jpeg_quality: int = 92,
):
    if not input_path.exists():
        raise FileNotFoundError(f"파일이 없습니다: {input_path}")

    if max_width <= 0:
        raise ValueError("max_width는 1 이상이어야 합니다.")
    if not (1 <= jpeg_quality <= 100):
        raise ValueError("jpeg_quality는 1~100 사이여야 합니다.")

    output_path = input_path.with_name(f"resize_{input_path.stem}.jpg")

    with Image.open(input_path) as img:
        img = ImageOps.exif_transpose(img)

        icc_profile = img.info.get("icc_profile")
        exif = img.info.get("exif")

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
            subsampling=0,          # 4:4:4, 색손실 줄임
            optimize=True,
            progressive=True,
            icc_profile=icc_profile,
            exif=exif,
        )

    print(f"saved: {output_path}")


def main():
    parser = argparse.ArgumentParser(description="이미지를 리사이즈하여 JPEG로 저장합니다.")
    parser.add_argument("input_file", help="입력 이미지 파일")
    parser.add_argument("--max-width", type=int, default=1920)
    parser.add_argument("--jpeg-quality", type=int, default=92)
    args = parser.parse_args()

    resize_single_image(
        input_path=Path(args.input_file),
        max_width=args.max_width,
        jpeg_quality=args.jpeg_quality,
    )


if __name__ == "__main__":
    main()