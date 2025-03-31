const { execSync } = require('child_process');

console.log('Starting FastAPI server...');
try {
  // Проверка Python
  try {
    execSync('python3 --version', { stdio: 'inherit' });
  } catch {
    console.error('Python 3 not found. Install with: sudo apt install python3 python3-pip');
    process.exit(1);
  }

  // Установка зависимостей
  try {
    execSync('python3 -m pip show fastapi uvicorn', { stdio: 'ignore' });
  } catch {
    console.log('Installing dependencies...');
    try {
      // Пробуем установить через системный менеджер
      execSync('sudo apt install python3-fastapi python3-uvicorn python3-requests python3-pydantic', {
        stdio: 'inherit'
      });
    } catch {
      // Если системные пакеты недоступны, используем pip с флагом
      console.log('Using pip with --break-system-packages');
      execSync('python3 -m pip install --user --break-system-packages fastapi uvicorn requests pydantic', {
        stdio: 'inherit'
      });
    }
  }

  // Запуск сервера
  const port = process.env.PORT || 8001;
  console.log(`Starting server on port ${port}...`);
  execSync(`python3 -m uvicorn main:app --host 0.0.0.0 --port ${port}`, {
    stdio: 'inherit'
  });
} catch (error) {
  console.error('Server startup failed:', error);
  process.exit(1);
}