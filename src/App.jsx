import styled from 'styled-components';
import './App.css';

// Common Styled Components for Container and Item Styles
const Section = styled.section`
  margin: 20px 0;
`;

const Container = styled.div`
  border: 1px solid #ddd;
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
`;

const Item = styled.div`
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  padding: 10px;
  text-align: center;
  color: #333;
  border-radius: 5px;
`;

function App() {
  const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

  return (
    <div className="App">
      <Section>
        <h2>Flex Row</h2>
        <p>This section demonstrates a row layout using Flexbox.</p>
        <Container className="flex-row">
          {items.map((item, index) => (
            <Item key={index}>{item}</Item>
          ))}
        </Container>
      </Section>

      <Section>
        <h2>Flex Column</h2>
        <p>This section demonstrates a column layout using Flexbox.</p>
        <Container className="flex-column">
          {items.map((item, index) => (
            <Item key={index}>{item}</Item>
          ))}
        </Container>
      </Section>

      <Section>
        <h2>Grid Template Column</h2>
        <p>This section demonstrates a column grid layout.</p>
        <Container className="grid-template-column">
          {items.map((item, index) => (
            <Item key={index}>{item}</Item>
          ))}
        </Container>
      </Section>

      <Section>
        <h2>Grid Template Row</h2>
        <p>This section demonstrates a row grid layout.</p>
        <Container className="grid-template-row">
          {items.map((item, index) => (
            <Item key={index}>{item}</Item>
          ))}
        </Container>
      </Section>

      <Section>
        <h2>Grid Template Area</h2>
        <p>This section demonstrates a grid layout using defined areas.</p>
        <Container className="grid-template-area">
          {items.map((item, index) => (
            <Item key={index} className={`area-item-${index + 1}`}>
              {item}
            </Item>
          ))}
        </Container>
      </Section>

      {/* Combined Example of All Display Options */}
      <Section>
        <h2>Combined Display Layout</h2>
        <p>
          This section shows Flex and Grid layouts working together, demonstrating how each
          display type interacts in a complex hierarchy.
        </p>
        <Container className="combined-display">
          <div className="combined-flex-row">
            <Item>Flex Row Item 1</Item>
            <Item>Flex Row Item 2</Item>
            <Container className="combined-grid-column">
              <Item>Grid Column Item 1</Item>
              <Item>Grid Column Item 2</Item>
              <Item>Grid Column Item 3</Item>
            </Container>
          </div>
          <Container className="combined-grid-area">
            <Item className="area1">Grid Area 1</Item>
            <Item className="area2">Grid Area 2</Item>
            <Container className="flex-column-inside-grid">
              <Item>Flex Column Item 1</Item>
              <Item>Flex Column Item 2</Item>
            </Container>
          </Container>
        </Container>
        <div>
          <strong>Hierarchy Explanation: </strong>
          <p>

          The main container uses Flex to align rows and columns.
          Inside, the Grid container manages item positioning. Each section demonstrates nested
          Flex and Grid components, showing how these display types can work together effectively.
          </p>
        </div>
      </Section>
    </div>
  );
}

export default App;
