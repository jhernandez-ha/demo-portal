import ExcelJS from "exceljs";
import jsPDF from "jspdf";
import saveAs from "file-saver";

export const exportToPDF = (
  data: Utility.JSONValue | Utility.JSONValue[],
  fileName: string
) => {
  const pdf = new jsPDF();
  data.forEach((item: Utility.JSONValue, index: number) => {
    pdf.text(JSON.stringify(item), 10, 10 + index * 10);
  });
  pdf.save(`${fileName}_data.pdf`);
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
