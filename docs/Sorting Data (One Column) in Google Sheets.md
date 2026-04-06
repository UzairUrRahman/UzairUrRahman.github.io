## Sorting Data in Google Sheets

Got it—you want to sort one column alphabetically (A → Z), keep all related row data together, and not mess up your header row. Here’s the clean way to do it in Google Sheets:

### Proper Method (keeps data aligned + ignores header)

1.  Select your full table (all columns, not just one). Example: If your data is from column A to D, select A1:D100 (include everything).
2.  Go to  **Data**  →  **Sort range**.
3.  In the popup:

-    Check “Data has header row”.
-   Under “Sort by”, choose the column you want (e.g., Column A).
-   Select A → Z.
-   Click  **Sort**.

### 🚫 What NOT to do

-   Don’t sort just a single column alone → this breaks your data alignment.
-   Don’t forget to check “Data has header row” → otherwise your header gets sorted too.

###  Bonus (Cleaner approach for future)

If you want a more structured way:

1.  Go to  **Data**  →  **Create a filter**.
2.  Then click the filter icon on your column header → Sort A → Z. (This automatically keeps headers fixed.)