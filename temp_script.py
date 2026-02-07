from pathlib import Path
path = Path('src/pages/dinamic/Miexpediente/index.jsx')
text = path.read_text(encoding='utf-8')
needle1 = "      const allItems = Array.isArray(data?.items) ? data.items : [];\n      console.log('📊 Total de elementos recibidos:', allItems.length);\n"
if "filesOnly" not in text:
    replacement1 = needle1 + "      const filesOnly = allItems.filter((item) => !(item?.isFolder or str(item?.key or '').endswith('/')));\n"
    if needle1 not in text:
        raise SystemExit('needle1 not found')
    text = text.replace(needle1, replacement1, 1)
needle2 = "      console.log('✅ Lista de documentos actualizada con', allItems.length, 'elementos');\n"
block = "      if (isAdmin and selectedClient and selectedFolder):\n        pass\n"
