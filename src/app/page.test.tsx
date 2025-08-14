import { render, screen } from '@testing-library/react'
import Home from './page'

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />)
    
    const heading = screen.getByText(/get started by editing/i)
    expect(heading).toBeInTheDocument()
  })

  it('renders the Next.js logo', () => {
    render(<Home />)
    
    const logo = screen.getByAltText('Next.js logo')
    expect(logo).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Home />)
    
    const deployLink = screen.getByRole('link', { name: /deploy now/i })
    const docsLink = screen.getByRole('link', { name: /read our docs/i })
    const learnLink = screen.getByRole('link', { name: /learn/i })
    const examplesLink = screen.getByRole('link', { name: /examples/i })
    const nextjsLink = screen.getByRole('link', { name: /go to nextjs.org/i })
    
    expect(deployLink).toBeInTheDocument()
    expect(docsLink).toBeInTheDocument()
    expect(learnLink).toBeInTheDocument()
    expect(examplesLink).toBeInTheDocument()
    expect(nextjsLink).toBeInTheDocument()
  })

  it('has correct external links', () => {
    render(<Home />)
    
    const deployLink = screen.getByRole('link', { name: /deploy now/i })
    expect(deployLink).toHaveAttribute('href', 'https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app')
    
    const docsLink = screen.getByRole('link', { name: /read our docs/i })
    expect(docsLink).toHaveAttribute('href', 'https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app')
  })
})