const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

console.log('Initializing backend server...');
try {
  // Проверяем и создаем venv с обработкой ошибок
  if (!fs.existsSync('venv')) {
    console.log('Creating Python virtual environment...');
    try {
      execSync('python3 -m venv venv', {
        stdio: 'inherit',
        timeout: 60000
      });
    } catch (err) {
      console.error('Virtual environment creation failed, trying without pip...');
      execSync('python3 -m venv --without-pip venv', {
        stdio: 'inherit'
      });
    }
  }

  // Установка зависимостей
  const pipPath = process.platform === 'win32'
    ? path.join('venv', 'Scripts', 'pip')
    : path.join('venv', 'bin', 'pip');

  if (fs.existsSync(pipPath)) {
    console.log('Installing Python dependencies...');
    execSync(`${pipPath} install fastapi uvicorn requests pydantic`, {
      stdio: 'inherit',
      timeout: 120000
    });
  }

  // Запуск сервера
  console.log('Starting FastAPI server...');
  const pythonPath = process.platform === 'win32'
    ? path.join('venv', 'Scripts', 'python')
    : path.join('venv', 'bin', 'python');
  
  const port = process.env.PORT || 8001;
  try {
    console.log(`Starting server on port ${port}...`);
    execSync(`${pythonPath} -m uvicorn main:app --host 0.0.0.0 --port ${port} --reload`, {
      stdio: 'inherit',
      timeout: 30000
    });
  } catch (err) {
    console.error('Failed to start server:');
    console.error('Python path:', pythonPath);
    console.error('Command:', `${pythonPath} -m uvicorn main:app --host 0.0.0.0 --port ${port} --reload`);
    console.error('Error details:', err);
    process.exit(1);
  }

} catch (error) {
  console.error('Server startup failed:', error);
  console.log('Check if Python 3.7+ is installed and try again');
  process.exit(1);
}