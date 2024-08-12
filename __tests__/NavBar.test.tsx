import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import NavBar from '@/components/NavBar';
import { useRouter } from 'next/navigation';
import { useUptickHook } from '../hooks/useUptickHook';

jest.mock('next/navigation', () => ({
  ...jest.requireActual('next/navigation'),
  useRouter: jest.fn(),
}));

jest.mock('../hooks/useUptickHook', () => ({
  useUptickHook: jest.fn(),
}));

jest.mock('../components/ui/toast', () => ({
  toast: jest.fn(),
}));

describe('NavBar', () => {
  beforeEach(() => {
    jest.resetAllMocks(); // Reset mocks before each test
  });

  const push = jest.fn();
  (useRouter as jest.Mock).mockReturnValue({
    push,
    prefetch: jest.fn(),
  });

  it('renders the name of the app as the logo that on click directs to the homepage', () => {
    const mockPush = jest.fn();

    // Arrange: Set up the mock implementations
    (useUptickHook as jest.Mock).mockReturnValue({
      user: null, // or mock user object if necessary
      logout: jest.fn(),
      categoriesData: [],
      getCategory: jest.fn(),
    });

    (useRouter as jest.Mock).mockReturnValue({
      push: mockPush,
    });

    // Act: Render the NavBar component
    render(<NavBar activeCategory={undefined} setActiveCategory={undefined} />);

    // Assign
    const logo = screen.getByText('Uptick');

    // Assert
    expect(logo).toBeInTheDocument();

    // Act: Click on the logo
    fireEvent.click(logo);

    // Assert: Check if router.push was called with '/'
    expect(mockPush).toHaveBeenCalledWith('/');
  });

  it("displays the user's first and last name when the user is logged in", () => {
    // Arrange: Set up the mock implementation for useUptickHook
    (useUptickHook as jest.Mock).mockReturnValue({
      user: {
        data: {
          firstName: 'John',
          lastName: 'Doe',
        },
      },
      logout: jest.fn(),
      categoriesData: [],
      getCategory: jest.fn(),
    });

    // Act: Render the NavBar component
    render(<NavBar activeCategory={null} setActiveCategory={jest.fn()} />);

    // Assert: Check if the user's name is displayed
    expect(screen.getByText('Welcome, John Doe')).toBeInTheDocument();
  });

  it('does not display user name when the user is not logged in', () => {
    // Arrange: Set up the mock implementation for useUptickHook with no user
    (useUptickHook as jest.Mock).mockReturnValue({
      user: null,
      logout: jest.fn(),
      categoriesData: [],
      getCategory: jest.fn(),
    });

    // Act: Render the NavBar component
    render(<NavBar activeCategory={null} setActiveCategory={jest.fn()} />);

    // Assert: Check that the user's name is not displayed
    expect(screen.queryByText(/Welcome, John Doe/)).not.toBeInTheDocument();
  });

  it('applies active category styling when the category is active', () => {
    // Arrange: Set up the mock implementation
    (useUptickHook as jest.Mock).mockReturnValue({
      logout: jest.fn(),
      categoriesData: ['Technology', 'Health', 'Finance'],
      getCategory: jest.fn(),
    });

    const activeCategory = 'Technology';

    // Render the NavBar component with a specific active category
    render(
      <NavBar activeCategory={activeCategory} setActiveCategory={() => {}} />
    );

    // Act: Find the category element
    const activeCategoryElement = screen.getByText('Technology');

    // Assert: Check if the element has the active styling class
    expect(activeCategoryElement).toHaveClass(
      'text-green-600 dark:text-green-600'
    );
  });

  it('does not apply active category styling when the category is not active', () => {
    // Arrange: Set up the mock implementation
    (useUptickHook as jest.Mock).mockReturnValue({
      logout: jest.fn(),
      categoriesData: ['Technology', 'Health', 'Finance'],
      getCategory: jest.fn(),
    });

    const activeCategory = 'Health'; // Active category is different

    // Render the NavBar component with a different active category
    render(
      <NavBar activeCategory={activeCategory} setActiveCategory={() => {}} />
    );

    // Act: Find the category element
    const inactiveCategoryElement = screen.getByText('Technology');

    // Assert: Check if the element does not have the active styling class
    expect(inactiveCategoryElement).not.toHaveClass(
      'text-green-600 dark:text-green-600'
    );
  });
});
