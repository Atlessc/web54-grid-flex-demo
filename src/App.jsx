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

const CodeBlock = styled.pre`
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
  color: #000;
  text-align: left;
`;

const Explanation = styled.div`
  margin-top: 10px;
  text-align: left;
`;

function App() {
  const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'];

  return (
    <div className="App">
      {/* Header */}
      <Section>
        <h1>Flexbox and Grid Layouts</h1>
        <p>
          This article demonstrates how to create Flexbox and Grid layouts using CSS. It provides
          examples of different layout options and explains how to use them in your projects.
        </p>
      </Section>

      {/* Flex Row */}
      <Section>
        <h2>Flex Row</h2>
        <p>This section demonstrates a row layout using Flexbox.</p>
        <Container className="flex-row">
          {items.map((item, index) => (
            <Item key={index}>{item}</Item>
          ))}
        </Container>
        <CodeBlock>{`
.flex-row {
  display: flex;
  flex-direction: row;

.flex-row > * {
  flex: 1;
}
        `}</CodeBlock>
        <Explanation>
          <strong>Explanation:</strong>
          <p>
            The <code>flex-row</code> class creates a Flex container with a row layout. The
            <code>flex: 1</code> property on the child elements makes them grow to fill the
            available space.
          </p>
        </Explanation>
      </Section>


      {/* Flex Column */}
      <Section>
        <h2>Flex Column</h2>
        <p>This section demonstrates a column layout using Flexbox.</p>
        <Container className="flex-column">
          {items.map((item, index) => (
            <Item key={index}>{item}</Item>
          ))}
        </Container>
        <CodeBlock>{`
.flex-column {
  display: flex;
  flex-direction: column;
}
.flex-column > * {
  flex: 1;
}
        `}</CodeBlock>
        <Explanation>
          <strong>Explanation:</strong>
          <p>
            The <code>flex-column</code> class creates a Flex container with a column layout. The
            <code>flex: 1</code> property on the child elements makes them grow to fill the
            available space.
          </p>
        </Explanation>

      </Section>

{/* Grid Template Column */}
      <Section>
        <h2>Grid Template Column</h2>
        <p>This section demonstrates a column grid layout.</p>
        <Container className="grid-template-column">
          {items.map((item, index) => (
            <Item key={index}>{item}</Item>
          ))}
        </Container>
        <CodeBlock>{`
.grid-template-column {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
        `}</CodeBlock>
        <Explanation>
          <strong>Explanation:</strong>
          <p>
            The <code>grid-template-columns</code> property defines the number of columns and their
            sizes. The <code>repeat(3, 1fr)</code> value creates three columns with equal width.
          </p>

        </Explanation>
      </Section>

{/* Grid Template Row */}
      <Section>
        <h2>Grid Template Row</h2>
        <p>This section demonstrates a row grid layout.</p>
        <Container className="grid-template-row">
          {items.map((item, index) => (
            <Item key={index}>{item}</Item>
          ))}
        </Container>
        <CodeBlock>{`
.grid-template-row {
  display: grid;
  grid-template-rows: repeat(3, 1fr);
}
        `}</CodeBlock>
        <Explanation>
          <strong>Explanation:</strong>
          <p>
            The <code>grid-template-rows</code> property defines the number of rows and their sizes. The <code>repeat(3, 1fr)</code> value creates three rows with equal height. 
          </p>
        </Explanation>
      </Section>

{/* Grid Template Area */}
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
        <CodeBlock>{`
.grid-template-area {
  display: grid;
  grid-template-areas:
    "item1 item1 item2 item2 item2 item2"
    "item3 item3 item3 item4 item4 item4"
    "item5 item5 item6 item4 item4 item4";
  gap: 10px;
}

.area-item-1 {
  grid-area: item1;
}

.area-item-2 {
  grid-area: item2;
}

.area-item-3 {
  grid-area: item3;
}

.area-item-4 {
  grid-area: item4;
}

.area-item-5 {
  grid-area: item5;
}

.area-item-6 {
  grid-area: item6;
}

        `}</CodeBlock>
        <Explanation>
          <strong>Explanation:</strong>
          <p>
            The <code>grid-template-areas</code> property defines the layout of the grid. The{' '}
            <code>grid-area</code> property on the child elements assigns them to specific areas.
          </p>
        </Explanation>
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
        <CodeBlock>{`
.combined-display {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}

.combined-flex-row {
  display: flex;
  flex-direction: row;
}

.combined-grid-column {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.combined-grid-area {
  display: grid;
  grid-template-areas:
    "area1 area1 area2"
    "area1 area1 area2"
    "area3 area3 area3";
  gap: 10px;
}

.flex-column-inside-grid {
  display: flex;
  flex-direction: column;
}

.area1 {
  grid-area: area1;
}

.area2 {
  grid-area: area2;
}

.area3 {
  grid-area: area3;
}
        `}</CodeBlock>
        <Explanation>
          <strong>Explanation:</strong>
          <p>
            This example combines Flex and Grid layouts to create a complex hierarchy. The{' '}
            <code>combined-display</code> class creates a grid container with two columns. The{' '}
            <code>combined-flex-row</code> class creates a Flex container with a row layout. The{' '}
            <code>combined-grid-column</code> class creates a grid container with three columns. The{' '}
            <code>combined-grid-area</code> class creates a grid container with defined areas. The{' '}
            <code>flex-column-inside-grid</code> class creates a Flex container inside a grid
            container.
          </p>
        </Explanation>
      </Section>

      {/* Thank you Message */}
      <Section>
        <h1>🙌🏽 Thank You! 🙌🏽</h1>
        <p>
          Thank you for reading this article. I hope you found it helpful in understanding the
          basics of Flexbox and Grid layouts. If you have any questions or feedback, please feel free to reach out to me on Twitter at <a href="https://x.com/budget101web54/">@Budget$0$web54</a>. 
        </p>
      </Section>
    </div>
  );
}

export default App;
