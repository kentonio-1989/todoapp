# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # 開発サーバー起動 → http://localhost:3000
npm run build    # プロダクションビルド
npm run start    # ビルド済みサーバー起動
npm run lint     # ESLint 実行
npx tsc --noEmit # 型チェックのみ（ビルドなし）
```

テストフレームワークは未導入。

## Architecture

シングルページの ToDo アプリ。Next.js App Router を使用しているが、サーバーサイドの機能は一切使っておらず、全ロジックはクライアント側で完結する。

```
app/
  layout.tsx          # HTML ルート・フォント設定（Geist Sans / Geist Mono）
  page.tsx            # エントリポイント（TodoApp を呼ぶだけ）
  globals.css         # Tailwind v4 の @import と CSS 変数
  components/
    TodoApp.tsx       # 状態管理・UI・localStorage 永続化をすべて含む
```

**状態管理:** `useState` のみ。外部ライブラリなし。

**永続化:** `localStorage` キー `"todos"` に JSON 保存。初回アクセス時（localStorage が空のとき）はサンプル 4 件を初期値として投入する。

**スタイル:** Tailwind CSS v4（`@import "tailwindcss"` 形式）。設定ファイル不要で PostCSS プラグイン経由で動作する。

## Key Constraints

- `TodoApp.tsx` は `'use client'` 必須（`localStorage` と `useRef` を使用するため）。
- `loaded` フラグで hydration 後まで localStorage 書き込みを遅延させている（SSR との不整合防止）。
- パス alias `@/*` は `./*`（リポジトリルート）に解決される。
