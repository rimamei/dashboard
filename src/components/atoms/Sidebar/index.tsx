import { Menu } from '@/configs';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';

const Sidebar = () => {
  const router = useRouter();
  const [active, setActive] = useState('');

  const getRoute = useCallback(() => {
    const { pathname } = router;
    const filterMenu = Menu.filter(
      (el) => el.link !== '/404' && el.link === pathname
    );
    if (filterMenu.length > 0) {
      setActive(filterMenu[0].title);
    }
  }, [router]);

  useEffect(() => {
    getRoute();
  }, [getRoute]);

  const handleChange = (item: IMenu) => {
    const title = item.title;
    if (active !== title) {
      setActive(title);
      router.push(item.link);
    }
  };

  return (
    <aside className="border-r pt-4 w-[100px] md:w-[350px]">
      <ul className="mx-6">
        {Menu.map((item, index) => (
          <li
            className={`cursor-pointer p-2 mb-4 md:mb-2 md:px-4 md:py-3 rounded-full flex items-center ${
              active === item.title
                ? 'bg-sky-600 text-white'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
            key={index}
            onClick={() => handleChange(item)}
          >
            <span className="md:mr-2">{item.icon}</span>
            <p className="hidden md:block">{item.title}</p>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
