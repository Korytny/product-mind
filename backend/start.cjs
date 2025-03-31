const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

console.log('Initializing backend server...');
try {
  // Проверка доступности Python
  try {
    execSync('python3 --version', { stdio: 'inherit' });
  } catch {
    console.error('Python 3 not found. Please install Python 3.7+ first');
    process.exit(1);
  }

  // Создаем новое чистое venv
  if (fs.existsSync('venv')) {
    console.log('Removing existing virtual environment...');
    fs.rmSync('venv', { recursive: true, force: true });
  }

  console.log('Creating new Python virtual environment...');
  try {
    // Пробуем стандартный способ с ensurepip
    execSync('python3 -m venv venv', {
      stdio: 'inherit',
      timeout: 60000
    });
  } catch (err) {
    console.log('Standard venv creation failed, trying without pip...');
    // Пробуем создать без pip
    execSync('python3 -m venv --without-pip venv', {
      stdio: 'inherit',
      timeout: 60000
    });
    
    // Устанавливаем pip вручную
    if (process.platform !== 'win32') {
      console.log('Manually installing pip...');
      execSync('curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py', { stdio: 'inherit' });
      execSync('venv/bin/python get-pip.py', { stdio: 'inherit' });
      fs.unlinkSync('get-pip.py');
    }
  }

  // Проверяем что venv создан правильно
  const venvPythonPath = process.platform === 'win32'
    ? 'venv/Scripts/python.exe'
    : 'venv/bin/python';
    
  if (!fs.existsSync(venvPythonPath)) {
    console.error('Virtual environment creation completely failed');
    process.exit(1);
  }

  // Установка зависимостей
  const pipPath = process.platform === 'win32'
    ? path.join('venv', 'Scripts', 'pip')
    : path.join('venv', 'bin', 'pip');

  // Проверка и установка зависимостей
  if (fs.existsSync(pipPath)) {
    console.log('Checking Python dependencies...');
    try {
      execSync(`${pythonPath} -m pip show uvicorn`, { stdio: 'ignore' });
      console.log('Dependencies already installed');
    } catch {
      console.log('Installing required packages...');
      execSync(`${pipPath} install --upgrade pip wheel`, { stdio: 'inherit' });
      execSync(`${pipPath} install fastapi uvicorn requests pydantic`, {
        stdio: 'inherit',
        timeout: 300000
      });
    }
  } else {
    console.error('pip not found in virtual environment');
    console.log('Try recreating venv with: python3 -m venv venv');
    process.exit(1);
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