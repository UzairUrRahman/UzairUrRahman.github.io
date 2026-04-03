# Google Sheets Text Capitalization

Got it — you want this to work for columns A to D in Google Sheets. **FOR NEW TEXT** 

You’ve got two clean ways:

-   **Option 1: Formula (no automation)**
    
    Setup:
    
    Put this in E1 (or any empty column):
    
    `=ARRAYFORMULA(IF(A1:D="", "", UPPER(LEFT(A1:D,1)) & MID(A1:D,2,LEN(A1:D))))`
    
    Result:
    
    It will apply capitalization to all cells from A to D. Output will spill across columns (E to H).
    
    👉 Example:
    
    hello world test data
    
    Becomes:
    
    Hello World Test Data
    
-   **Option 2: Fully Automatic (Best for your case)**
    
    This updates text directly in A–D when you type.
    
    Steps:
    
    1.  Go to Extensions → Apps Script
    2.  Replace code with:
    
    ```
    function onEdit(e) {
      const range = e.range;
    
      // Columns A (1) to D (4)
      if (range.getColumn() >= 1 && range.getColumn() <= 4) {
        let value = range.getValue();
    
        if (typeof value === "string" && value.length > 0) {
          let newValue = value.charAt(0).toUpperCase() + value.slice(1);
          range.setValue(newValue);
        }
      }
    }
    ```
    
    4.  Save and return to sheet
    
    

## Option 1 (Fastest – One-time fix using formula) FOR EXISTING TEXT

1.  Pick an empty area (say starting from E1) and paste:

```
=ARRAYFORMULA(IF(A1:D="", "", UPPER(LEFT(A1:D,1)) & MID(A1:D,2,LEN(A1:D))))
```

3.  Select all the new results (columns E → H)
4.  Press Ctrl + C
5.  Select original data (A → D)
6.  Right click → Paste special → Values only

👉 This will overwrite old data with the capitalized version.

8.  Delete columns E → H (cleanup)

## Option 2 (Cleaner – Script to fix everything)

If you prefer automation, update your Apps Script to this:

```
function capitalizeExistingData() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const range = sheet.getRange("A1:D" + sheet.getLastRow());
  const values = range.getValues();

  const updated = values.map(row =>
    row.map(cell => {
      if (typeof cell === "string" && cell.length > 0) {
        return cell.charAt(0).toUpperCase() + cell.slice(1);
      }
      return cell;
    })
  );

  range.setValues(updated);
}
```