import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import About from "../components/About";
import logo from "../assets/logo";

test("renders a <aside> element", () => {
  render(<About />);
  expect(screen.getByRole('aside')).toBeInTheDocument();
});

test("renders a <img> with the blog logo and alt text of 'blog logo'", () => {
  render(<About image={logo} />);
  const img = screen.getByAltText("blog logo");
  expect(img).toBeInTheDocument();
  expect(img.src).toContain(logo);
});

test("uses a default value for the image if no image is passed as a prop", () => {
  render(<About />);
  const img = screen.getByAltText("blog logo");
  expect(img).toBeInTheDocument();
  expect(img.src).toContain("https://via.placeholder.com/215");
});

test("renders a <p> with the about text", () => {
  render(<About about="About this blog" />);
  const p = screen.getByText("About this blog");
  expect(p).toBeInTheDocument();
  expect(p.tagName).toBe("P");
});
