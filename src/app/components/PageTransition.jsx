// components/PageTransition.jsx
'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function PageTransition({ children }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [key, setKey] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      // Увеличиваем key при каждом изменении пути
      // Это заставляет React полностью пересоздать все компоненты
      setKey(prev => prev + 1);

      // Принудительно сбрасываем состояние корзины? Нет, не надо
      // Корзина должна сохраняться

      // Небольшая задержка для гарантии
      setTimeout(() => {
        // Принудительно обновляем все данные
        if (typeof window !== 'undefined') {
          // Диспатчим событие для обновления данных
          window.dispatchEvent(new Event('routeChangeComplete'));
        }
      }, 50);
    }
  }, [pathname, searchParams, mounted]);

  // Создаем уникальный ключ на основе пути и счетчика
  const routeKey = `${pathname}${searchParams?.toString() || ''}-${key}`;

  return (
    <div key={routeKey}>
      {children}
    </div>
  );
}