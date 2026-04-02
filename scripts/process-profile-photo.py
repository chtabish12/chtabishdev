#!/usr/bin/env python3
"""
Professional profile photo processor for portfolio.
Usage:
    pip install Pillow
    python scripts/process-profile-photo.py <input_image>

The processed photo will be saved to public/profile.jpg and will
automatically appear in the About section of the portfolio.
"""

import sys
import os
from pathlib import Path

try:
    from PIL import Image, ImageEnhance, ImageFilter
except ImportError:
    print("Please install Pillow:  pip install Pillow")
    sys.exit(1)


def process_photo(input_path: str, output_path: str = "public/profile.jpg") -> None:
    print(f"Processing: {input_path}")
    img = Image.open(input_path).convert("RGB")

    # --- 1. Smart square crop (focus on upper-centre for portrait shots) ---
    w, h = img.size
    size = min(w, h)
    left = (w - size) // 2
    # Shift crop upward by 35 % to keep the face centred for portrait photos
    top = max(0, int((h - size) * 0.35))
    img = img.crop((left, top, left + size, top + size))

    # --- 2. Resize to 512x512 for web (Retina-quality at 256 px display size) ---
    img = img.resize((512, 512), Image.LANCZOS)

    # --- 3. Professional colour grading ---
    # Slight brightness lift
    img = ImageEnhance.Brightness(img).enhance(1.04)
    # Contrast pop -- makes the subject stand out
    img = ImageEnhance.Contrast(img).enhance(1.08)
    # Colour vibrancy boost
    img = ImageEnhance.Color(img).enhance(1.12)
    # Mild sharpening for web crispness
    img = ImageEnhance.Sharpness(img).enhance(1.4)
    # Light unsharp-mask pass
    img = img.filter(ImageFilter.UnsharpMask(radius=1.2, percent=60, threshold=3))

    # --- 4. Save optimised JPEG ---
    os.makedirs(os.path.dirname(output_path) or ".", exist_ok=True)
    img.save(output_path, "JPEG", quality=90, optimize=True, progressive=True)
    size_kb = Path(output_path).stat().st_size // 1024
    print(f"Saved to {output_path}  ({size_kb} KB, 512x512)")
    print("Your photo will now appear in the About section of the portfolio.")


if __name__ == "__main__":
    if len(sys.argv) < 2:
        print(__doc__)
        sys.exit(1)
    process_photo(sys.argv[1])
