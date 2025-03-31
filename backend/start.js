const { execSync } = require('child_process');
const path = require('path');

console.log('Setting up Python virtual environment...');
try {
  // Создаем виртуальное окружение
  execSync('python3 -m venv venv', { stdio: 'inherit' });

  // Активируем venv и устанавливаем зависимости
  const pipPath = process.platform === 'win32' 
    ? path.join('venv', 'Scripts', 'pip') 
    : path.join('venv', 'bin', 'pip');
  
  execSync(`${pipPath} install fastapi uvicorn requests pydantic`, { stdio: 'inherit' });

  // Запускаем сервер
  console.log('Starting FastAPI server...');
  const pythonPath = process.platform === 'win32'
    ? path.join('venv', 'Scripts', 'python')
    : path.join('venv', 'bin', 'python');
  
  execSync(`${pythonPath} -m uvicorn main:app --reload`, { stdio: 'inherit' });

} catch (error) {
  console.error('Error:', error.message);
  process.exit(1);
}