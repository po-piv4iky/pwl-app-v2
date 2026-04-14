import { ProgramCategory } from "@/programs/types/program.types";

export interface ProgramsPreview {
  id: string;
  title: string; // название программы
  author?: string;
  lift: ProgramCategory; // движение
  level: string;
  description?: string; // описание
  durationWeeks: number; // колличество недель
}



// Действие	Windows/Linux	Mac
// Свернуть все	Ctrl + K + Ctrl + 0 (ноль)	
// Развернуть все	Ctrl + K + Ctrl + J	
// Свернуть функции	Ctrl + K + Ctrl + 1	
// Развернуть функции	Ctrl + K + Ctrl + 2	
// Свернуть текущий блок	Ctrl + Shift + [	
// Развернуть текущий блок	Ctrl + Shift + ]