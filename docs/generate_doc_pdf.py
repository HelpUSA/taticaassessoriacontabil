import os
from reportlab.lib.pagesizes import A4
from reportlab.lib import colors
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable, Image
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.pdfgen import canvas

class NumberedCanvas(canvas.Canvas):
    def __init__(self, *args, **kwargs):
        super(NumberedCanvas, self).__init__(*args, **kwargs)
        self._saved_page_states = []

    def showPage(self):
        self._saved_page_states.append(dict(self.__dict__))
        self._startPage()

    def save(self):
        num_pages = len(self._saved_page_states)
        for state in self._saved_page_states:
            self.__dict__.update(state)
            self.draw_page_decorations(num_pages)
            super(NumberedCanvas, self).showPage()
        super(NumberedCanvas, self).save()

    def draw_page_decorations(self, page_count):
        self.saveState()
        self.setFont("Helvetica", 8.5)
        self.setFillColor(colors.HexColor("#64748B"))
        
        if self._pageNumber > 1:
            self.drawString(54, 800, "Relatório de Acompanhamento | Tática Assessoria Contábil (21/09/2026)")
            self.setStrokeColor(colors.HexColor("#CBD5E1"))
            self.setLineWidth(0.5)
            self.line(54, 792, 541, 792)
        
        footer_text = f"Página {self._pageNumber} de {page_count}"
        self.drawRightString(541, 32, footer_text)
        self.drawString(54, 32, "Documentação Oficial de Acompanhamento — HelpUS Technology")
        self.setStrokeColor(colors.HexColor("#CBD5E1"))
        self.setLineWidth(0.5)
        self.line(54, 44, 541, 44)
        self.restoreState()

def build_pdf():
    docs_dir = os.path.dirname(os.path.abspath(__file__))
    pdf_filename = os.path.join(docs_dir, "Documentacao_Requisitos_e_Acompanhamento_Contador_Marx.pdf")
    
    doc = SimpleDocTemplate(
        pdf_filename,
        pagesize=A4,
        leftMargin=54,
        rightMargin=54,
        topMargin=54,
        bottomMargin=54
    )

    styles = getSampleStyleSheet()
    PRIMARY = colors.HexColor("#0F172A")
    SECONDARY = colors.HexColor("#2563EB")
    TEXT_DARK = colors.HexColor("#1E293B")
    BG_LIGHT = colors.HexColor("#F8FAFC")
    ACCENT = colors.HexColor("#1E40AF")

    title_style = ParagraphStyle('DocTitle', parent=styles['Normal'], fontName='Helvetica-Bold', fontSize=13, leading=17, textColor=PRIMARY, spaceAfter=4)
    subtitle_style = ParagraphStyle('DocSubtitle', parent=styles['Normal'], fontName='Helvetica', fontSize=9, leading=12, textColor=SECONDARY, spaceAfter=8)
    h1_style = ParagraphStyle('SectionH1', parent=styles['Normal'], fontName='Helvetica-Bold', fontSize=10, leading=13, textColor=PRIMARY, spaceBefore=10, spaceAfter=4)
    h2_style = ParagraphStyle('SectionH2', parent=styles['Normal'], fontName='Helvetica-Bold', fontSize=9, leading=12, textColor=ACCENT, spaceBefore=6, spaceAfter=3)
    body_style = ParagraphStyle('BodyDark', parent=styles['Normal'], fontName='Helvetica', fontSize=8, leading=11, textColor=TEXT_DARK, spaceAfter=3)
    caption_style = ParagraphStyle('Caption', parent=styles['Normal'], fontName='Helvetica-Oblique', fontSize=7.5, leading=10, textColor=colors.HexColor("#64748B"), spaceAfter=5, alignment=1)

    story = []

    # Title & Banner
    story.append(Paragraph("DOCUMENTAÇÃO DE REQUISITOS & ACOMPANHAMENTO (21/09/2026)", title_style))
    story.append(Paragraph("Solicitações do Contador Marx | Auto-Consulta CNPJ | Clonar NF por Número | Guia de Testes", subtitle_style))
    story.append(HRFlowable(width="100%", thickness=1.5, color=SECONDARY, spaceAfter=6))

    # Meta Table
    meta_data = [
        [Paragraph("<b>Cliente / Parceiro:</b> Contador Marx (Tática Assessoria)", body_style), Paragraph("<b>Data de Registro:</b> 21/09/2026", body_style)],
        [Paragraph("<b>Projeto:</b> tatica.helpusbr.com", body_style), Paragraph("<b>Status:</b> Concluído & Deploy em Produção", body_style)],
        [Paragraph("<b>Desenvolvimento:</b> HelpUS Technology Solutions", body_style), Paragraph("<b>Repositório:</b> HelpUSA/taticaassessoriacontabil", body_style)]
    ]
    t_meta = Table(meta_data, colWidths=[240, 247])
    t_meta.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), BG_LIGHT),
        ('BOX', (0,0), (-1,-1), 0.5, colors.HexColor("#CBD5E1")),
        ('INNERGRID', (0,0), (-1,-1), 0.5, colors.HexColor("#E2E8F0")),
        ('TOPPADDING', (0,0), (-1,-1), 3),
        ('BOTTOMPADDING', (0,0), (-1,-1), 3),
        ('LEFTPADDING', (0,0), (-1,-1), 6),
        ('RIGHTPADDING', (0,0), (-1,-1), 6),
    ]))
    story.append(t_meta)
    story.append(Spacer(1, 10))

    # Section 1: WhatsApp Feedback
    story.append(Paragraph("1. SOLICITAÇÃO ORIGINAL DO CONTADOR MARX (WHATSAPP)", h1_style))
    
    img_wa_path = os.path.join(docs_dir, "whatsapp_solicitacao_marx_20260921.png")
    if os.path.exists(img_wa_path):
        wa_img = Image(img_wa_path, width=280, height=210)
        story.append(wa_img)
        story.append(Paragraph("Figura 1: Mensagem enviada pelo Contador Marx via WhatsApp em 21/09/2026.", caption_style))

    story.append(Paragraph("<b>Transcrição da Solicitação:</b><br/><i>'Bom dia, meu amigo! Td jóia? Tava viajando cheguei quinta a tarde cheio de pendências para resolver, testei a opção da NF agora, ficou bacana, mas diretamente no site da prefeitura é ainda mais rápido, pq vc não precisa digitar o nome da empresa emissora e se a tomadora tiver cadastro na prefeitura de João Pessoa, tb só digita o CNPJ, e ainda clona a última NF emitida para determinado tomador só colocando o número da NF.'</i>", body_style))
    story.append(Spacer(1, 8))

    # Section 2: Requisitos
    story.append(Paragraph("2. REQUISITOS DE NEGÓCIO & SOLUÇÕES IMPLEMENTADAS", h1_style))
    req_table_data = [
        [Paragraph("<b>Item Solicitado</b>", body_style), Paragraph("<b>Solução Desenvolvida</b>", body_style), Paragraph("<b>Impacto na Operação</b>", body_style)],
        [Paragraph("Omitir Razão Social da Emissora", body_style), Paragraph("Auto-preenchimento por CNPJ da Emissora", body_style), Paragraph("Digitação 0% repetitiva", body_style)],
        [Paragraph("Auto-preencher Tomador PMJP", body_style), Paragraph("Consulta CNPJ/CPF com Nome e E-mail automáticos", body_style), Paragraph("Evita erros em e-mails e nomes", body_style)],
        [Paragraph("Clonar NF pelo Número", body_style), Paragraph("Aba 'Clonar NF por Nº' com restauração exata", body_style), Paragraph("Emissão mensal em 3 segundos", body_style)]
    ]
    t_req = Table(req_table_data, colWidths=[150, 190, 147])
    t_req.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), colors.HexColor("#E2E8F0")),
        ('BOX', (0,0), (-1,-1), 0.5, colors.HexColor("#CBD5E1")),
        ('INNERGRID', (0,0), (-1,-1), 0.5, colors.HexColor("#E2E8F0")),
        ('TOPPADDING', (0,0), (-1,-1), 3),
        ('BOTTOMPADDING', (0,0), (-1,-1), 3),
        ('LEFTPADDING', (0,0), (-1,-1), 5),
        ('RIGHTPADDING', (0,0), (-1,-1), 5),
    ]))
    story.append(t_req)
    story.append(Spacer(1, 10))

    # Section 3: Roteiro de Testes
    story.append(Paragraph("3. ROTEIRO DE TESTES & VALIDAÇÃO (tatica.helpusbr.com)", h1_style))
    story.append(Paragraph("<b>Passo 1 (Área Administrativa):</b> Acesse o rodapé do site, clique em 'Área Administrativa (Login do Contador)' e entre na central.", body_style))
    story.append(Paragraph("<b>Passo 2 (Clonagem Rápida):</b> Na central, clique em 'Clonar NF por Nº', selecione a nota de teste #1042 (TechCorp) e veja os dados restaurados.", body_style))
    story.append(Paragraph("<b>Passo 3 (Consulta CNPJ):</b> Na aba 'Emissão Direta', digite o CNPJ '98765432000110' e observe o autocompletar de Nome e E-mail.", body_style))
    story.append(Paragraph("<b>Passo 4 (Confirmação):</b> Clique em 'Gerar Fila de Emissão' para validar o protocolo de envio via WhatsApp.", body_style))

    doc.build(story, canvasmaker=NumberedCanvas)
    print("PDF gerado com sucesso:", pdf_filename)

if __name__ == '__main__':
    build_pdf()
