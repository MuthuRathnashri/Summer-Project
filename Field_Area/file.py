from fpdf import FPDF
pdf = FPDF()
pdf.add_page()
pdf.set_font("Arial","B",16)
pdf.write(4,"hbtttvjhvj")
pdf.output("file.pdf")