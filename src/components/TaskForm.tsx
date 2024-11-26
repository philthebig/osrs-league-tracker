import React, { useState } from 'react';
import { Task, Region } from '../types/tasks';
import { categories } from '../data/tasks';

interface TaskFormProps {
  onAddTask: (task: Omit<Task, 'id' | 'completed'>) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onAddTask }) => {
  const [showForm, setShowForm] = useState(false);
  const [newTask, setNewTask] = useState({
    description: '',
    points: 0,
    category: '',
    region: 'Misthalin' as Region,
    location: '',
    notes: '',
    recommendedOrder: 0,
    requirements: {
      items: [] as string[],
      skills: {} as Record<string, number>,
      quests: [] as string[]
    }
  });

  const regions: Region[] = [
    'Misthalin',
    'Karamja',
    'Asgarnia',
    'Kandarin',
    'Morytania',
    'Desert',
    'Fremennik',
    'Tirannwn',
    'Wilderness'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddTask(newTask);
    setNewTask({
      description: '',
      points: 0,
      category: '',
      region: 'Misthalin',
      location: '',
      notes: '',
      recommendedOrder: 0,
      requirements: {
        items: [],
        skills: {},
        quests: []
      }
    });
    setShowForm(false);
  };

  const updateRequirements = (field: 'items' | 'quests', value: string) => {
    const items = value.split(',').map(item => item.trim()).filter(Boolean);
    setNewTask({
      ...newTask,
      requirements: {
        ...newTask.requirements,
        [field]: items
      }
    });
  };

  return (
    <div className="mb-6">
      <button
        onClick={() => setShowForm(!showForm)}
        className="mb-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
      >
        {showForm ? 'Cancel' : 'Add New Task'}
      </button>

      {showForm && (
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-2">Description:</label>
              <input
                type="text"
                value={newTask.description}
                onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
                className="w-full p-2 border rounded"
                required
              />
            </div>

            <div>
              <label className="block mb-2">Points:</label>
              <input
                type="number"
                value={newTask.points}
                onChange={(e) => setNewTask({ ...newTask, points: parseInt(e.target.value) || 0 })}
                className="w-full p-2 border rounded"
                required
                min="0"
              />
            </div>

            <div>
              <label className="block mb-2">Category:</label>
              <select
                value={newTask.category}
                onChange={(e) => setNewTask({ ...newTask, category: e.target.value })}
                className="w-full p-2 border rounded"
                required
              >
                <option value="">Select Category</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block mb-2">Region:</label>
              <select
                value={newTask.region}
                onChange={(e) => setNewTask({ ...newTask, region: e.target.value as Region })}
                className="w-full p-2 border rounded"
                required
              >
                {regions.map(region => (
                  <option key={region} value={region}>{region}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block mb-2">Location:</label>
              <input
                type="text"
                value={newTask.location}
                onChange={(e) => setNewTask({ ...newTask, location: e.target.value })}
                className="w-full p-2 border rounded"
              />
            </div>

            <div>
              <label className="block mb-2">Recommended Order:</label>
              <input
                type="number"
                value={newTask.recommendedOrder}
                onChange={(e) => setNewTask({ ...newTask, recommendedOrder: parseInt(e.target.value) || 0 })}
                className="w-full p-2 border rounded"
                min="0"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block mb-2">Required Items (comma-separated):</label>
              <input
                type="text"
                value={newTask.requirements.items.join(', ')}
                onChange={(e) => updateRequirements('items', e.target.value)}
                className="w-full p-2 border rounded"
                placeholder="e.g., Harpoon, 25gp, Rope"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block mb-2">Required Quests (comma-separated):</label>
              <input
                type="text"
                value={newTask.requirements.quests.join(', ')}
                onChange={(e) => updateRequirements('quests', e.target.value)}
                className="w-full p-2 border rounded"
                placeholder="e.g., Vampire Slayer, Dragon Slayer"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block mb-2">Notes:</label>
              <textarea
                value={newTask.notes}
                onChange={(e) => setNewTask({ ...newTask, notes: e.target.value })}
                className="w-full p-2 border rounded"
                rows={3}
              />
            </div>
          </div>

          <div className="mt-4 flex justify-end gap-2">
            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            >
              Add Task
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default TaskForm;