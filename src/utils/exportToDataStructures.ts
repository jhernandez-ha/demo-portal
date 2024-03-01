import ExcelJS from "exceljs";
import autoTable from "jspdf-autotable";
import jsPDF from "jspdf";
import saveAs from "file-saver";
import wipayLogo from "../../public/Logotipo_Wipay_transparent.png";

type pdfOrientation = "landscape" | "portrait";

export const exportToPDF = (
  data: Utility.JSONValue[],
  fileName: string,
  orientation: pdfOrientation = "landscape"
) => {
  if (data.length !== 0) {
    const pdf = new jsPDF(orientation);

    const headers = Object.keys(data[0]);
    const pdfData = data.map((item) => headers.map((header) => item[header]));
    pdf.addImage(wipayLogo.src, "PNG", 15, 10, 40, 10);
    autoTable(pdf, {
      head: [headers],
      body: pdfData,
      tableWidth: "wrap",
      theme: "grid",
      headStyles: {
        fontStyle: "bold",
        fillColor: "#0d2845",
      },
      startY: 30,
      styles: {
        cellWidth: "wrap",
      },
    });

    pdf.save(`${fileName}_data.pdf`);
  }
};

export const exportToExcel = async (
  data: Utility.JSONValue[],
  fileName: string
) => {
  if (data.length === 0) {
    // No hay datos para exportar
    return;
  }

  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet(`${fileName}_1`);

  // Extraer nombres de propiedades del primer elemento en el dataSource
  const properties = Object.keys(data[0]);

  // Agregar encabezados de columnas
  const headerRow = worksheet.addRow(properties);
  headerRow.font = { bold: true };

  // Agregar datos
  data.forEach((item) => {
    worksheet.addRow(properties.map((prop) => item[prop]));
  });

  // Crear un Blob y descargarlo
  const buffer = await workbook.xlsx.writeBuffer();
  const blob = new Blob([buffer], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  });

  // Utilizar saveAs directamente
  saveAs(blob, `${fileName}_data.xlsx`);
};
