import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import HeroComponent from '@/components/HeroComponent';

describe('NavBar', () => {
  it('renders a heading', () => {
    render(<HeroComponent />)
 
    const heading = screen.getByRole('heading', { level: 1 })
 
    expect(heading).toBeInTheDocument();
  })
});
