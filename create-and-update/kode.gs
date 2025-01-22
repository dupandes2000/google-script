let SHEET_NAME = "";

function insertData(dataUpdates) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
  const dataSheet = getDataSheet(SHEET_NAME); 
  const keys = dataSheet.length ? Object.keys(dataSheet[0]) : []; 
  
  const rowIndex = dataSheet.findIndex(item => item.id == dataUpdates.id) + 2; 
  
  if (rowIndex > 1) {
    Object.entries(dataUpdates).forEach(([key, value]) => {
      const colIndex = keys.indexOf(key) + 1;
      if (colIndex > 0) {
        sheet.getRange(rowIndex, colIndex).setValue(value);
      }
    });
  } else {
    sheet.appendRow(Object.values(dataUpdates));
  }
  return dataUpdates;
}
