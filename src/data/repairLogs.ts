// 以下為展示網站資訊架構的案例格式示例，正式上線前請替換為已獲授權的實際案件資料。
export const repairLogs = [
  { id:'OBS-001', category:'PCB板', device:'EMU500串列及網路控制器SES', symptom:'上電後無法正常啟動，疑似電源區異常。', diagnosis:'以分區量測方式檢查供電與訊號路徑，釐清異常區段及接點狀態。', solution:'依故障點更換適用元件並檢查相關焊接與電路狀態。', turnaround:'90日', costRange:'檢測後報價' },
  { id:'OBS-002', category:'PCB板', device:'EMU800旅客資訊系統PA播音控制器', symptom:'可以正常啟動但沒有聲音，音源輸送異常。', diagnosis:'檢查輸入、轉換與輸出端狀態，逐步定位供電異常位置。', solution:'依故障點更換適用元件並檢查相關焊接與電路狀態。', turnaround:'60日', costRange:'檢測後報價' },
  { id:'OBS-003', category:'PCB板', device:'門機控制盒 (DCU)', symptom:'上電後無法正常啟動，疑似電源區異常。', diagnosis:'檢查輸入、轉換與輸出端狀態，逐步定位供電異常位置。', solution:'針對確認異常的元件與焊點進行修復，再執行基本功能確認。', turnaround:'90日', costRange:'檢測後報價' },
  { id:'FAB-001', category:'機械零件加工、製作', device:'襯套／銷類零件', symptom:'既有零件磨耗，需依樣品製作替換件。', diagnosis:'依來樣確認外徑、內徑、長度與配合位置等尺寸需求。', solution:'確認材質與公差需求後，評估車削加工及尺寸檢驗方式。', turnaround:'30日', costRange:'圖面／樣品評估後報價' },
  { id:'FAB-002', category:'機械零件加工、製作', device:'鈑金固定支座', symptom:'現有支座需依安裝空間調整尺寸與孔位。', diagnosis:'檢視樣品或圖面，確認板厚、折彎、孔位及安裝介面。', solution:'依確認規格安排鈑金加工，完成後核對外觀與關鍵尺寸。', turnaround:'90日', costRange:'圖面／樣品評估後報價' },
  { id:'FAB-003', category:'機械零件加工、製作', device:'塑膠導槽與線夾', symptom:'設備配線固定或導引零件需補製。', diagnosis:'依現有零件與設備位置確認外型、固定方式及尺寸。', solution:'評估材料與成型方式，依確認樣式製作並檢查組裝適配。', turnaround:'60日', costRange:'需求確認後報價' }
];
