# Personal Website

A single-page personal / research portfolio site with a dark, numbered-section layout,
modeled after a modern academic homepage. It is plain HTML, CSS, and JavaScript with no
build step or external dependencies.

## Preview locally

Any static server works. For example:

```powershell
cd E:\claudecode实战
python -m http.server 8000
```

Then open <http://localhost:8000>.

## Deploy to GitHub Pages

1. Create an empty repository on GitHub, for example `yourusername.github.io`
   (or any repository name, then enable Pages from the repo settings).
2. Push this folder to the repository:

```powershell
cd E:\claudecode实战
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/yourusername.github.io.git
git push -u origin main
```

3. In the repository **Settings → Pages**, set the source to the `main` branch and
   the `/ (root)` folder.
4. Your site will be live at `https://yourusername.github.io/`.

## Awards & certificates

The **Competition achievements** section (section `05`) shows each award as a clickable
card. Clicking a card opens a lightbox with the full-size certificate image and a link to
the original PDF.

Certificates are stored as images (so they can be used as `<img>` sources) plus the
original PDFs:

- `images/*.pdf` — the original certificate PDFs.
- `certificates/thumb/cert-NN.jpg` — small card thumbnails (620px wide).
- `certificates/full/cert-NN.jpg` — large images shown in the lightbox (1600px wide).

The awards are rendered once per certificate in three places:

- `index.html` → the `<button class="cert-card">` inside `#competitions`.
- `script.js` → the `STRINGS` entries `certNN.*` (English and Chinese text).
- `styles.css` → the `.cert-grid` / `.lightbox` styles.

### Adding a new certificate

1. Put the PDF in `images/`.
2. Render the first page to `certificates/thumb/cert-NN.jpg` and
   `certificates/full/cert-NN.jpg` (any 1600px-wide render). For example, with
   [PyMuPDF](https://pymupdf.readthedocs.io/):

```python
import pymupdf
doc = pymupdf.open("images/your-cert.pdf")
page = doc[0]
rect = page.rect
page.get_pixmap(matrix=pymupdf.Matrix(1600 / rect.width, 1600 / rect.width)).save("certificates/full/cert-13.jpg")
page.get_pixmap(matrix=pymupdf.Matrix(620 / rect.width, 620 / rect.width)).save("certificates/thumb/cert-13.jpg")
```

3. Copy an existing `<button class="cert-card">` block in `index.html`, update the
   `data-cert-full` / `data-cert-pdf` paths and the `certNN.*` keys.
4. Add matching `certNN.*` entries (English and Chinese) to the `STRINGS` object in
   `script.js`.

## Customize content

Open `index.html` and replace the placeholder details:

- Name, role, location, and tagline in the hero.
- Education, coursework, and languages in the Profile section.
- Research interests and publications in the Research and Work sections.
- Projects, skills, honors, and community roles.
- Contact email in the Contact section and the `mailto:` link.
- GitHub URL in the Contact section.

Colors and spacing are controlled by the CSS variables at the top of `styles.css`.
