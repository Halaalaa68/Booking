'use client';

import { useState, useEffect } from 'react';
import '../../app/globals.css';

const TaskList = () => {
    const [currentTask, setCurrentTask] = useState(0);
    const [tasksCompleted, setTasksCompleted] = useState(false);

    const tasks = [
        { id: 1, title: "تقييم المهمة", count: "1/12", loadingMessage: "جاري تقديم طلب المهمة" },
        { id: 2, title: "مراجعة المنصة", loadingMessage: "جاري طلب مراجعة المنصة" },
        { id: 3, title: "تقديم البيانات", loadingMessage: "جاري تقديم بيانات الطلب" },
        { id: 4, title: "اكتملت المهمة" },
    ];

    useEffect(() => {
        let timeout;
        if (currentTask < tasks.length) {
            timeout = setTimeout(() => {
                setCurrentTask(currentTask + 1);
            }, 3000); // Slower loading time
        } else {
            setTasksCompleted(true);
        }

        return () => clearTimeout(timeout);
    }, [currentTask]);

    return (
        <div className="w-full p-4 bg-white rounded-lg shadow-md" dir="rtl">
            <ul className="list-none p-0">
                {tasks.map((task, index) => (
                    <li
                        key={task.id}
                        className={`flex items-center mb-3 transition-opacity duration-500 ${index < currentTask ? 'opacity-100' : 'opacity-50'}`}
                    >
                        <div className="relative mr-2">
                            <span className={`w-8 h-8 rounded-full flex justify-center items-center ${index < currentTask ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-600'}`}>
                                {index < currentTask ? '✓' : task.id}
                            </span>
                        </div>
                        <div className="ml-2">
                            <span className="font-medium">{task.title} {task.count && <span className="text-gray-500 ml-1">({task.count})</span>}</span>
                            {index === currentTask && (
                                <span className="block italic text-gray-400 text-sm mt-1">{task.loadingMessage}</span>
                            )}
                            <div className={`h-1 mt-1 rounded-full bg-blue-500 transition-all duration-1000`} style={{ width: `${index < currentTask ? '100%' : '0%'}` }}></div>
                        </div>
                    </li>
                ))}
            </ul>

            {tasksCompleted && (
                <div className="mt-4 text-center">
                    <p className="text-lg font-medium">لقد حصلت على عمولة بقيمة (71.28) في المهمة على المنصة (Booking). وتم تحويل هذه العمولة إلى حسابك على المنصة.</p>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-medium mt-3 transition duration-300" onClick={() => alert('تم التأكيد!')}>
                        تأكيد
                    </button>
                </div>
            )}
        </div>
    );
};

export default TaskList;