import React, { useState } from 'react'
import "../Styles/CoursesAcademics.css"

// Sample course data - later you'll fetch this from your backend API
const coursesData = [
  {
    id: 1,
    title: "Algebra I Fundamentals",
    description: "An introductory course to algebraic concepts, covering linear equations, inequalities, and basic functions.",
    duration: "16 Weeks",
    faculty: "Dr. Jenny Chen",
    level: "Beginner",
    subject: "Mathematics",
    gradeLevel: "Middle School (6-8)",
    programType: "Standard Curriculum",
    image: "https://plus.unsplash.com/premium_photo-1661432575489-b0400f4fea58?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["Mathematics"]
  },
  {
    id: 2,
    title: "Biology: Life Sciences",
    description: "Explore the fundamental principles of life, from cellular structures to ecosystems.",
    duration: "18 Weeks",
    faculty: "Prof. David Lee",
    level: "Intermediate",
    subject: "Science",
    gradeLevel: "High School (9-12)",
    programType: "Standard Curriculum",
    image: "https://plus.unsplash.com/premium_photo-1661432575489-b0400f4fea58?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["Science", "High School (9-12)"]
  },
  {
    id: 3,
    title: "World History: Ancient to Modern",
    description: "A comprehensive study of human civilizations from ancient times through the modern era, focusing on key events.",
    duration: "20 Weeks",
    faculty: "Ms. Sarah Miller",
    level: "Intermediate",
    subject: "Social Studies",
    gradeLevel: "High School (9-12)",
    programType: "Standard Curriculum",
    image: "https://plus.unsplash.com/premium_photo-1661432575489-b0400f4fea58?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["Social Studies"]
  },
  {
    id: 4,
    title: "Creative Writing Workshop",
    description: "Develop your storytelling skills through various genres, including fiction, poetry, and creative non-fiction.",
    duration: "12 Weeks",
    faculty: "Mr. Alex Johnson",
    level: "Intermediate",
    subject: "Language Arts",
    gradeLevel: "High School (9-12)",
    programType: "Enrichment Program",
    image: "https://plus.unsplash.com/premium_photo-1661432575489-b0400f4fea58?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["Language Arts", "Arts & Music"]
  },
  {
    id: 5,
    title: "Introduction to Programming",
    description: "Learn the basics of computer programming using Python. Covers fundamental concepts like variables, loops, and functions.",
    duration: "14 Weeks",
    faculty: "Dr. Chris Wong",
    level: "Beginner",
    subject: "Computer Science",
    gradeLevel: "High School (9-12)",
    programType: "Standard Curriculum",
    image: "https://plus.unsplash.com/premium_photo-1661432575489-b0400f4fea58?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["Computer Science"]
  },
  {
    id: 6,
    title: "Physics: Mechanics & Motion",
    description: "An in-depth exploration of classical mechanics, energy, and waves, featuring hands-on labs.",
    duration: "16 Weeks",
    faculty: "Dr. Olivia Brown",
    level: "Advanced",
    subject: "Science",
    gradeLevel: "High School (9-12)",
    programType: "Advanced Placement",
    image: "https://plus.unsplash.com/premium_photo-1661432575489-b0400f4fea58?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["Science", "Advanced Placement"]
  },
  {
    id: 7,
    title: "AP Calculus AB",
    description: "Rigorous preparation for the AP Calculus AB exam, covering limits, derivatives, integrals, and their applications.",
    duration: "32 Weeks",
    faculty: "Prof. Robert Davis",
    level: "Expert",
    subject: "Mathematics",
    gradeLevel: "High School (9-12)",
    programType: "Advanced Placement",
    image: "https://plus.unsplash.com/premium_photo-1661432575489-b0400f4fea58?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["Mathematics"]
  },
  {
    id: 8,
    title: "Literary Analysis & Criticism",
    description: "Develop critical reading and analytical writing skills through the study of diverse literary texts.",
    duration: "18 Weeks",
    faculty: "Dr. Sophia Garcia",
    level: "Advanced",
    subject: "Language Arts",
    gradeLevel: "High School (9-12)",
    programType: "Advanced Placement",
    image: "https://plus.unsplash.com/premium_photo-1661432575489-b0400f4fea58?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["Language Arts"]
  }
]

const gradeLevels = [
  "Elementary (K-5)",
  "Middle School (6-8)",
  "High School (9-12)",
  "Advanced Placement"
]

const subjects = [
  "Mathematics",
  "Science",
  "Language Arts",
  "Social Studies",
  "Computer Science",
  "Arts & Music"
]

const programTypes = [
  "Standard Curriculum",
  "Honors Program",
  "Enrichment Program",
  "Specialized Workshop"
]

const difficultyLevels = [
  "Beginner",
  "Intermediate",
  "Advanced",
  "Expert"
]

function CoursesAcademics() {
  const [filters, setFilters] = useState({
    gradeLevels: [],
    subjects: [],
    programTypes: [],
    difficultyLevels: []
  })

  const [expandedSections, setExpandedSections] = useState({
    gradeLevel: true,
    subject: true,
    programType: true,
    difficultyLevel: true
  })

  // New state for mobile filter toggle
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }

  const handleFilterChange = (category, value) => {
    setFilters(prev => {
      const currentFilters = prev[category]
      const newFilters = currentFilters.includes(value)
        ? currentFilters.filter(item => item !== value)
        : [...currentFilters, value]
      return { ...prev, [category]: newFilters }
    })
  }

  // Count active filters
  const activeFilterCount = 
    filters.gradeLevels.length + 
    filters.subjects.length + 
    filters.programTypes.length + 
    filters.difficultyLevels.length

  // Clear all filters
  const clearAllFilters = () => {
    setFilters({
      gradeLevels: [],
      subjects: [],
      programTypes: [],
      difficultyLevels: []
    })
  }

  const filteredCourses = coursesData.filter(course => {
    const gradeMatch = filters.gradeLevels.length === 0 || filters.gradeLevels.includes(course.gradeLevel)
    const subjectMatch = filters.subjects.length === 0 || filters.subjects.includes(course.subject)
    const programMatch = filters.programTypes.length === 0 || filters.programTypes.includes(course.programType)
    const difficultyMatch = filters.difficultyLevels.length === 0 || filters.difficultyLevels.includes(course.level)
    return gradeMatch && subjectMatch && programMatch && difficultyMatch
  })

  return (
    <div className="courses-academics-page">
      {/* Hero Section */}
      <section className="courses-hero">
        <h1>Our Academic Programs</h1>
        <p>Discover a wide range of courses designed to foster critical thinking, creativity, and a lifelong love for learning.</p>
      </section>

      {/* Main Content */}
      <div className="courses-content">
        {/* Mobile Filter Toggle Button */}
        <button 
          className="mobile-filter-toggle"
          onClick={() => setIsFilterOpen(!isFilterOpen)}
        >
          <span className="filter-icon">⚙️</span>
          <span>Filters</span>
          {activeFilterCount > 0 && (
            <span className="filter-badge">{activeFilterCount}</span>
          )}
        </button>

        {/* Filter Overlay for Mobile */}
        <div 
          className={`filter-overlay ${isFilterOpen ? 'active' : ''}`}
          onClick={() => setIsFilterOpen(false)}
        ></div>

        {/* Filter Sidebar */}
        <aside className={`filter-sidebar ${isFilterOpen ? 'open' : ''}`}>
          {/* Mobile Filter Header */}
          <div className="mobile-filter-header">
            <h3>Filters</h3>
            <button 
              className="close-filter-btn"
              onClick={() => setIsFilterOpen(false)}
            >
              ✕
            </button>
          </div>

          <h3 className="filter-title">Filter Courses</h3>

          {/* Clear Filters Button */}
          {activeFilterCount > 0 && (
            <button className="clear-filters-btn" onClick={clearAllFilters}>
              Clear All ({activeFilterCount})
            </button>
          )}

          {/* Grade Level Filter */}
          <div className="filter-section">
            <button 
              className="filter-section-header"
              onClick={() => toggleSection('gradeLevel')}
            >
              <span>Grade Level</span>
              <span className={`chevron ${expandedSections.gradeLevel ? 'expanded' : ''}`}>▼</span>
            </button>
            {expandedSections.gradeLevel && (
              <div className="filter-options">
                {gradeLevels.map(level => (
                  <label key={level} className="filter-checkbox">
                    <input
                      type="checkbox"
                      checked={filters.gradeLevels.includes(level)}
                      onChange={() => handleFilterChange('gradeLevels', level)}
                    />
                    <span className="checkmark"></span>
                    <span className="filter-label">{level}</span>
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Subject Filter */}
          <div className="filter-section">
            <button 
              className="filter-section-header"
              onClick={() => toggleSection('subject')}
            >
              <span>Subject</span>
              <span className={`chevron ${expandedSections.subject ? 'expanded' : ''}`}>▼</span>
            </button>
            {expandedSections.subject && (
              <div className="filter-options">
                {subjects.map(subject => (
                  <label key={subject} className="filter-checkbox">
                    <input
                      type="checkbox"
                      checked={filters.subjects.includes(subject)}
                      onChange={() => handleFilterChange('subjects', subject)}
                    />
                    <span className="checkmark"></span>
                    <span className="filter-label">{subject}</span>
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Program Type Filter */}
          <div className="filter-section">
            <button 
              className="filter-section-header"
              onClick={() => toggleSection('programType')}
            >
              <span>Program Type</span>
              <span className={`chevron ${expandedSections.programType ? 'expanded' : ''}`}>▼</span>
            </button>
            {expandedSections.programType && (
              <div className="filter-options">
                {programTypes.map(type => (
                  <label key={type} className="filter-checkbox">
                    <input
                      type="checkbox"
                      checked={filters.programTypes.includes(type)}
                      onChange={() => handleFilterChange('programTypes', type)}
                    />
                    <span className="checkmark"></span>
                    <span className="filter-label">{type}</span>
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Difficulty Level Filter */}
          <div className="filter-section">
            <button 
              className="filter-section-header"
              onClick={() => toggleSection('difficultyLevel')}
            >
              <span>Difficulty Level</span>
              <span className={`chevron ${expandedSections.difficultyLevel ? 'expanded' : ''}`}>▼</span>
            </button>
            {expandedSections.difficultyLevel && (
              <div className="filter-options">
                {difficultyLevels.map(level => (
                  <label key={level} className="filter-checkbox">
                    <input
                      type="checkbox"
                      checked={filters.difficultyLevels.includes(level)}
                      onChange={() => handleFilterChange('difficultyLevels', level)}
                    />
                    <span className="checkmark"></span>
                    <span className="filter-label">{level}</span>
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Apply Button */}
          <button 
            className="apply-filters-btn"
            onClick={() => setIsFilterOpen(false)}
          >
            Show {filteredCourses.length} Results
          </button>
        </aside>

        {/* Course Grid */}
        <main className="courses-grid-container">
          <div className="courses-grid">
            {filteredCourses.map(course => (
              <div key={course.id} className="course-card">
                <div className="course-image">
                  <img src={course.image} alt={course.title} />
                </div>
                <div className="course-content">
                  <div className="course-tags">
                    {course.tags.map((tag, index) => (
                      <span key={index} className="course-tag">{tag}</span>
                    ))}
                  </div>
                  <h3 className="course-title">{course.title}</h3>
                  <p className="course-description">{course.description}</p>
                  <div className="course-meta">
                    <p><strong>Duration:</strong> {course.duration}</p>
                    <p><strong>Faculty:</strong> {course.faculty}</p>
                    <p><strong>Level:</strong> {course.level}</p>
                  </div>
                  <button className="view-details-btn">View Details →</button>
                </div>
              </div>
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div className="no-results">
              <p>No courses found matching your filters. Try adjusting your selection.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}

export default CoursesAcademics