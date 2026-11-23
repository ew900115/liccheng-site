# 力丞實業有限公司－維修工作室網站

以 Astro + Vanilla CSS/JavaScript 建置的繁體中文企業形象與需求登記網站，已附 GitHub Actions 自動部署 GitHub Pages 設定。

## 使用 GitHub 免費發布

1. 登入 https://github.com/ ，建立一個 **Public** repository，建議名稱 `liccheng-site`。
2. 將本專案資料夾內的所有檔案與資料夾上傳至 repository 根目錄（包含隱藏的 `.github` 資料夾）。
3. 將 GitHub 預設分支設為 `main`，並確認 `.github/workflows/deploy.yml` 已出現在檔案列表。
4. 開啟 repository 的 **Settings → Pages**，在 **Build and deployment → Source** 選擇 **GitHub Actions**。
5. 開啟 **Actions**，等待 `Deploy Astro site to GitHub Pages` 工作流程全部成功。
6. 網址通常會是 `https://<你的GitHub帳號>.github.io/liccheng-site/`。可在 **Settings → Pages** 查看實際網址。

之後每次把更新推送到 `main`，GitHub Actions 都會自動重新建置並發布。

## 本機開發

```bash
npm install
npm run dev
```

## 建置與預覽

```bash
npm run build
npm run preview
```

## 上線前必須確認

1. `src/data/shopInfo.ts` 中的公司資訊、電話、地址、營業時間是否正確。
2. LINE ID `@lab-repair` 是 placeholder，請換成實際官方帳號連結／ID。
3. `src/data/repairLogs.ts` 的案例是示意資料，已在網站標示為非實績；正式上線前請替換成取得授權的真實案例，或移除該區。
4. 線上需求表單目前只在瀏覽器產生摘要與單號，不會將資料傳送到伺服器。正式收件需串接後端、表單服務或 CRM，並補上隱私權告知與資料保存規範。
5. GitHub Pages 免費提供靜態網站託管；本專案目前不包含後端資料庫或表單收件服務。

## 專案結構

- `src/components/`：頁首、首頁主視覺、服務、案例、流程、表單、頁尾與手機操作列
- `src/data/`：工作室資訊、服務項目與案例資料
- `src/layouts/`：共用 SEO 與頁面框架
- `src/pages/index.astro`：首頁組裝
- `src/styles/global.css`：完整設計系統與響應式樣式
- `.github/workflows/deploy.yml`：GitHub Actions 自動部署流程
