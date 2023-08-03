# Kanban Board - Built with React.JS

[![React Version](https://img.shields.io/badge/React-18.2.0-blue.svg)](https://reactjs.org/)

![Demo Kanban Board](/public/preview/kanban-board-preview.png)

Ini adalah aplikasi Kanban yang dibuat dengan menggunakan React.JS, yang memungkinkan Anda untuk mengatur tugas menggunakan apikasi ini. Aplikasi ini dirancang untuk membantu mengelola tugas-tugas Anda dengan lebih efisien, melacak kemajuannya, dan dengan mudah memvisualisasikan alur kerja.

## Features

- Create Task, Edit Task, dan Delete Task.
- Memindahkan task/tugas ke kolom status yang berbeda (To Do, In Progress, Complete).
- Terdapat tingkat prioritas task (Low Priority, Medium Priority, High Priority).
- Memberikan kategori agar lebih mudah dalam mengkoordinasikan tasks.
- Sudah support Dark Mode.

## Getting Started

1. Clone repositori: 
```bash
git clone https://github.com/rezakurniawan88/kanban-board.git
```
2. Install dependensi: 
```bash
npm install
```
3. Jalankan development server: 
```bash
npm start
```

## Technologies Used

- React.JS untuk user interface.
- React-Dnd untuk drag-and-drop pada card.
- React-hook-form untuk mengelola form.
- React-hot-toast untuk menampilkan toast.
- TailwindCSS untuk styling.
- Local Storage untuk persistensi data.
- Zustand untuk state management.
