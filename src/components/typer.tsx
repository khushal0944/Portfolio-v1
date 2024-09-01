"use client"
import React, { useState, useEffect } from 'react';

interface TyperPropsType {
    textArray: string[],
    typingSpeed?: number,
    deletingSpeed?: number,
    lineDelay?: number
}

const Typer = ({ textArray, typingSpeed = 100, deletingSpeed = 70, lineDelay = 1000 }: TyperPropsType ) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (currentLineIndex >= textArray.length) {
      setCurrentLineIndex(0);
      setDisplayedText('');
      return;
    }

    const currentLine = textArray[currentLineIndex];
    
    if (!isDeleting && displayedText === currentLine) {
      // Finished typing, wait before deleting
      const timer = setTimeout(() => setIsDeleting(true), lineDelay);
      return () => clearTimeout(timer);
    }

    if (isDeleting && displayedText === '') {
      // Finished deleting, move to next line
      setIsDeleting(false);
      setCurrentLineIndex((prev) => prev + 1);
      return;
    }

    const timer = setTimeout(() => {
      setDisplayedText(prev => 
        isDeleting 
          ? prev.slice(0, -1)
          : currentLine.slice(0, prev.length + 1)
      );
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timer);
  }, [currentLineIndex, displayedText, isDeleting, textArray, typingSpeed, deletingSpeed, lineDelay]);

  return (
    <>
      {displayedText}
      <span className="animate-pulse">|</span>
    </>
  );
};

export default Typer;