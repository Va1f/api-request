import axios from 'axios';

// Типизация данных, возвращаемых API
interface Pet {
  id: number;
  name: string;
  status: string;
  [key: string]: any; // чтобы учесть другие поля, которые могут прийти с API
}

// Функция для выполнения GET-запроса
async function getPetsByStatus(status: string): Promise<void> {
  try {
    const response = await axios.get<Pet[]>(`https://petstore3.swagger.io/api/v3/pet/findByStatus`, {
      params: { status }
    });
    
    // Вывод данных в консоль
    console.log('Pets:', response.data);
  } catch (error) {
    console.error('Error fetching pets:', error);
  }
}

// Вызов функции с нужным статусом
getPetsByStatus('available');
