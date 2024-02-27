import { DesktopOutlined, FileOutlined, PieChartOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import InventoryIcon from '@mui/icons-material/Inventory';
import SettingsIcon from '@mui/icons-material/Settings';
const getRandomId = () => Math.random().toString(36).slice(2);
export const items = [
  {
    key: getRandomId(),
    icon: <PieChartOutlined />,
    label: 'Main',
  },
  {
    key: getRandomId(),
    icon: <SettingsIcon />,
    label: <Link to='/' className='text-decoration-none'>Dashboard</Link>,
  },
  {
    key: getRandomId(),
    icon: <DesktopOutlined />,
    label: 'System Identity',
  },
  {
    key: getRandomId(),
    icon: <UserOutlined />,
    label: 'Master User',
    children: [
      { key: getRandomId(), label: 'Admin & Staff', id: '1' },
      { key: getRandomId(), label: 'Supplier', id: '2' },
      { key: getRandomId(), label: 'Customer', id: '3' },
    ],
  },
  {
    key: getRandomId(),
    icon: <InventoryIcon />,
    label: <Link to='/goods' className='text-decoration-none'>Master of Goods</Link>,
  },
  {
    key: getRandomId(),
    icon: <DesktopOutlined />,
    label: <Link to='/stock-notification' className='text-decoration-none'>Stock Notification</Link>,
  },
  {
    key: getRandomId(),
    icon: <UserOutlined />,
    label: 'Transaction',
    children: [
      { key: getRandomId(), label: 'Incoming Goods', id: '4' },
      { key: getRandomId(), label: 'Outgoing Goods', id: '5' },
      { key: getRandomId(), label: 'Adjustment', id: '6' },
    ],
  },
  {
    key: getRandomId(),
    icon: <UserOutlined />,
    label: 'Report',
    children: [
      { key: getRandomId(), label: 'Incoming Goods', id: '7' },
      { key: getRandomId(), label: 'Outgoing Goods', id: '8' },
      { key: getRandomId(), label: 'Adjustment', id: '9' },
    ],
  },
];
