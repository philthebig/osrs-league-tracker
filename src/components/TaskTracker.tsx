import React, { useState, useEffect } from 'react';
import { Search, Filter, Info } from 'lucide-react';
import { Task } from '../types/tasks';
import { initialTasks, categories } from '../data/tasks';
import TaskForm from './TaskForm';
import DarkModeToggle from './DarkModeToggle';
import { TASKS_VERSION } from '../data/tasks';

interface Stats {
  totalPoints: number;
  completedTasks: number;
  totalTasks: number;
  percentComplete: number;
}

const TaskTracker: React.FC = () => {
  // Dark mode state
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });

  // Task states
  const [tasks, setTasks] = useState<Task[]>(() => {
    const savedTasks = localStorage.getItem('leagueTasks');
    const savedVersion = localStorage.getItem('tasksVersion');
    console.log('Current saved version:', savedVersion); // For debugging
    console.log('New version:', TASKS_VERSION); // For debugging
    
    // Clear everything if version is different
    if (!savedTasks || savedVersion !== TASKS_VERSION) {
      console.log('Updating to new version'); // For debugging
      localStorage.clear(); // Clear all storage
      localStorage.setItem('tasksVersion', TASKS_VERSION);
      localStorage.setItem('leagueTasks', JSON.stringify(initialTasks));
      return initialTasks;
    }
    return JSON.parse(savedTasks);
  });

  // UI states
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedRegions, setSelectedRegions] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState<boolean>(false);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [showAllInfo, setShowAllInfo] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<'order' | 'points' | 'category'>('order');

  // Effects
  useEffect(() => {
    localStorage.setItem('leagueTasks', JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  // Event handlers
  const handleAddTask = (newTask: Omit<Task, 'id' | 'completed'>) => {
    const nextId = Math.max(...tasks.map(task => task.id), 0) + 1;
    setTasks([...tasks, { ...newTask, id: nextId, completed: false }]);
  };

  const toggleTask = (id: number): void => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const toggleCategory = (category: string): void => {
    setSelectedCategories(prev => 
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const toggleRegion = (region: string): void => {
    setSelectedRegions(prev => 
      prev.includes(region)
        ? prev.filter(r => r !== region)
        : [...prev, region]
    );
  };

  const toggleDarkMode = () => setDarkMode(!darkMode);

  // Calculations
  const calculateStats = (): Stats => {
    const completed = tasks.filter(task => task.completed);
    return {
      totalPoints: tasks.reduce((acc, task) => acc + (task.completed ? task.points : 0), 0),
      completedTasks: completed.length,
      totalTasks: tasks.length,
      percentComplete: (completed.length / tasks.length) * 100
    };
  };

  const filteredTasks = tasks
    .filter(task => {
      const matchesSearch = task.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(task.category);
      const matchesRegion = selectedRegions.length === 0 || selectedRegions.includes(task.region);
      return matchesSearch && matchesCategory && matchesRegion;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'order':
          return (a.recommendedOrder || 0) - (b.recommendedOrder || 0);
        case 'points':
          return b.points - a.points;
        case 'category':
          return a.category.localeCompare(b.category);
        default:
          return 0;
      }
    });

  const stats = calculateStats();

  // Render
  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="mb-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold dark:text-white">OSRS League 5 Task Tracker</h1>
          <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        </div>

        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-lg">
            <p className="text-lg font-semibold dark:text-white">Points: {stats.totalPoints}</p>
          </div>
          <div className="bg-green-100 dark:bg-green-900 p-4 rounded-lg">
            <p className="text-lg font-semibold dark:text-white">
              Progress: {stats.completedTasks}/{stats.totalTasks}
            </p>
          </div>
          <div className="bg-purple-100 dark:bg-purple-900 p-4 rounded-lg">
            <p className="text-lg font-semibold dark:text-white">
              Completion: {stats.percentComplete.toFixed(1)}%
            </p>
          </div>
        </div>

        <div className="flex gap-4 mb-4 flex-wrap md:flex-nowrap">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search tasks..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg flex items-center gap-2 hover:bg-blue-600 transition-colors"
          >
            <Filter size={20} />
            Filters
          </button>
          <button
            onClick={() => setShowAllInfo(!showAllInfo)}
            className="px-4 py-2 bg-purple-500 text-white rounded-lg flex items-center gap-2 hover:bg-purple-600 transition-colors"
          >
            {showAllInfo ? 'Hide All Info' : 'Show All Info'}
          </button>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as 'order' | 'points' | 'category')}
            className="px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          >
            <option value="order">Order</option>
            <option value="points">Points</option>
            <option value="category">Category</option>
          </select>
        </div>

        {showFilters && (
          <div className="mb-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <div className="mb-4">
              <h3 className="font-semibold mb-2 dark:text-white">Categories</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map((category: string) => (
                  <button
                    key={category}
                    onClick={() => toggleCategory(category)}
                    className={`px-3 py-1 rounded-full text-sm transition-colors ${
                      selectedCategories.includes(category)
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-200 text-gray-700 dark:bg-gray-600 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-500'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-2 dark:text-white">Regions</h3>
              <div className="flex flex-wrap gap-2">
                {['Misthalin', 'Karamja'].map((region: string) => (
                  <button
                    key={region}
                    onClick={() => toggleRegion(region)}
                    className={`px-3 py-1 rounded-full text-sm transition-colors ${
                      selectedRegions.includes(region)
                        ? 'bg-green-500 text-white'
                        : 'bg-gray-200 text-gray-700 dark:bg-gray-600 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-500'
                    }`}
                  >
                    {region}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        <TaskForm onAddTask={handleAddTask} />
      </div>

      <div className="space-y-2">
        {filteredTasks.map((task: Task) => (
          <div
            key={task.id}
            className={`p-4 rounded-lg shadow-md bg-white dark:bg-gray-800 border-l-4 ${
              task.completed ? 'border-green-500' : 'border-gray-300 dark:border-gray-600'
            }`}
          >
            <div className="flex items-center gap-4">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
                className="w-5 h-5 text-blue-600 rounded dark:bg-gray-700"
              />
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className={`${task.completed ? 'line-through text-gray-500' : ''} dark:text-white`}>
                    {task.description}
                  </span>
                  <button
                    onClick={() => setSelectedTask(selectedTask?.id === task.id ? null : task)}
                    className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors"
                  >
                    <Info size={16} className="text-gray-500 dark:text-gray-400" />
                  </button>
                </div>
                {(showAllInfo || selectedTask?.id === task.id) && (
                  <div className="mt-2 text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    {task.beforeSteps && task.beforeSteps.length > 0 && (
                      <div className="mb-2">
                        <p className="font-semibold">Before task:</p>
                        <ul className="list-disc pl-4 space-y-1">
                          {task.beforeSteps.map((step, index) => (
                            <li key={index} className={`
                              ${step.type === 'BANK' ? 'text-blue-600 dark:text-blue-400 font-semibold' : ''}
                              ${step.type === 'WITHDRAW' ? 'text-green-600 dark:text-green-400' : ''}
                              ${step.type === 'NOTE' ? 'text-gray-500 dark:text-gray-400 italic' : ''}
                            `}>
                              {step.description}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {task.location && (
                      <p><strong>Location:</strong> {task.location}</p>
                    )}
                    {task.requirements?.items && task.requirements.items.length > 0 && (
                      <p><strong>Required items:</strong> {task.requirements.items.join(', ')}</p>
                    )}
                    {task.requirements?.skills && Object.keys(task.requirements.skills).length > 0 && (
                      <p>
                        <strong>Required skills:</strong>{' '}
                        {Object.entries(task.requirements.skills)
                          .map(([skill, level]) => `${skill} (${level})`)
                          .join(', ')}
                      </p>
                    )}
                    {task.requirements?.quests && task.requirements.quests.length > 0 && (
                      <p><strong>Required quests:</strong> {task.requirements.quests.join(', ')}</p>
                    )}
                    <p><strong>Region:</strong> {task.region || 'Not specified'}</p>
                    {task.recommendedOrder && (
                      <p><strong>Recommended Order:</strong> {task.recommendedOrder}</p>
                    )}
                    {task.notes && (
                      <p><strong>Notes:</strong> {task.notes}</p>
                    )}

                    {task.afterSteps && task.afterSteps.length > 0 && (
                      <div className="mt-2">
                        <p className="font-semibold">After task:</p>
                        <ul className="list-disc pl-4 space-y-1">
                          {task.afterSteps.map((step, index) => (
                            <li key={index} className={`
                              ${step.type === 'BANK' ? 'text-blue-600 dark:text-blue-400 font-semibold' : ''}
                              ${step.type === 'WITHDRAW' ? 'text-green-600 dark:text-green-400' : ''}
                              ${step.type === 'NOTE' ? 'text-gray-500 dark:text-gray-400 italic' : ''}
                            `}>
                              {step.description}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-sm dark:text-gray-200">
                  {task.category}
                </span>
                <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-sm dark:text-gray-200">
                  {task.region}
                </span>
                <span className="font-semibold text-gray-600 dark:text-gray-200">
                  {task.points} pts
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskTracker;