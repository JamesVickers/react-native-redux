import { create } from 'tailwind-rn';
import styles from '../styles.json';

const { tailwind, getColor } = create(styles);
export { tailwind, getColor };

// example // getColor('blue-500') === '#4299E1';