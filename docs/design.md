# Todoアプリ設計

## 1. 目的
Reactの基礎（コンポーネント、Props、useState、イベント処理）を学ぶためのTodoアプリを作成する。

---

## 2. 機能
- Todoを追加する
- Todoを一覧表示する
- Todoを削除する

---

## 3. 画面構成

```
+----------------------+
| Todo入力欄            |  [追加]
+----------------------+

・買い物 [x]
・勉強 [x]
・散歩 [x]
```

---

## 4. コンポーネント構成

```
App
├─ TodoInput
└─ TodoList
    └─ TodoItem
```

### 各コンポーネントの役割

| コンポーネント | 役割 |
|---------------|------|
| App | Todoデータを管理する |
| TodoInput | Todoを入力・追加する |
| TodoList | Todo一覧を表示する |
| TodoItem | Todoを1件表示する |

---

## 5. 状態設計

### Todo

```ts
type Todo = {
  id: number;
  text: string;
};
```

### State

```ts
const [todos, setTodos] = useState<Todo[]>([]);
```

---
