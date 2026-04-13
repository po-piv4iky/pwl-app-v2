
export interface ProgramPreview {
  id: string;
  title: string; // название программы
  author?: string;
  lift: 'bench' | 'deadlift' | 'squat' | 'complex'; // движение
  level: string;
  description?: string; // описание
  durationWeeks: string; // колличество недель
}



// Действие	Windows/Linux	Mac
// Свернуть все	Ctrl + K + Ctrl + 0 (ноль)	
// Развернуть все	Ctrl + K + Ctrl + J	
// Свернуть функции	Ctrl + K + Ctrl + 1	
// Развернуть функции	Ctrl + K + Ctrl + 2	
// Свернуть текущий блок	Ctrl + Shift + [	
// Развернуть текущий блок	Ctrl + Shift + ]