import { useState } from "react";
import styled from "styled-components";
import Header from "@/components/Header";
import { exercises } from "@/lib/exercises";
import MindfulnessCard from "@/components/MindfulnessCard";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #93bfcf;
  width: 50vw;
  padding-bottom: 2px;
  border-radius: 0 0 30px 30px;

  label {
    margin-bottom: 8px;
  }
`;

const StyledSelect = styled.select`
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #fff;
  color: #272727;
  font-size: 20px;
  width: 120px;
  outline: none;
  cursor: pointer;

  option {
    background: #fff;
    color: #272727;
    padding: 8px;
    font-size: 16px;
    outline: none;
  }
`;

export default function MindfulnessPage() {
  const allCategories = ["All", "Beginner", "Advanced", "Expert"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const filteredExercises =
    selectedCategory === "All"
      ? exercises
      : exercises.filter((exercise) => exercise.category === selectedCategory);

  return (
    <PageContainer>
      <Header title="be mindful" />
      <FilterContainer>
        <label htmlFor="category">Categories</label>
        <StyledSelect
          id="category"
          onChange={handleCategoryChange}
          value={selectedCategory}
        >
          {allCategories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </StyledSelect>
      </FilterContainer>
      {filteredExercises.map((exercise) => (
        <MindfulnessCard
          key={exercise.id}
          title={exercise.title}
          description={exercise.description}
          category={exercise.category}
        />
      ))}
    </PageContainer>
  );
}
