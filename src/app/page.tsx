"use client";

import { useState } from 'react';

export default function Home() {
  const [content, setContent] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = async () => {
    setIsGenerating(true);
    // TODO: Implement AI generation logic
    setTimeout(() => setIsGenerating(false), 1000);
  };

  return (
    <div className="min-h-screen bg-[#0066cc] dark:bg-[#003366] relative overflow-hidden">
      {/* Geometric Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Tetrahedron */}
        <div className="absolute top-[10%] left-[15%] w-48 h-48 border-4 border-white/20 
                      transform rotate-45 skew-y-[20deg] animate-float-slow">
          <div className="absolute inset-0 border-4 border-white/20 
                        transform rotate-[60deg] origin-center"></div>
          <div className="absolute inset-0 border-4 border-white/20 
                        transform -rotate-[60deg] origin-center"></div>
        </div>

        {/* Cube */}
        <div className="absolute top-[60%] left-[75%] w-64 h-64 border-4 border-white/20 
                      transform rotate-45 animate-float">
          <div className="absolute inset-0 border-4 border-white/20 
                        transform skew-y-[45deg]"></div>
        </div>

        {/* Octahedron */}
        <div className="absolute top-[80%] left-[25%] w-40 h-40 animate-float-slow">
          <div className="absolute inset-0 border-4 border-white/20 
                        transform rotate-45 skew-x-[45deg]"></div>
          <div className="absolute inset-0 border-4 border-white/20 
                        transform rotate-45 skew-y-[45deg]"></div>
        </div>

        {/* Dodecahedron (simplified) */}
        <div className="absolute top-[20%] right-[20%] w-56 h-56 animate-float">
          <div className="absolute inset-0 border-4 border-white/20 
                        transform rotate-[72deg]">
            <div className="absolute inset-0 border-4 border-white/20 
                          transform rotate-[72deg]"></div>
          </div>
        </div>

        {/* Icosahedron (simplified) */}
        <div className="absolute top-[40%] left-[5%] w-48 h-48 animate-float-slow">
          <div className="absolute inset-0 border-4 border-white/20 
                        transform rotate-[36deg]">
            <div className="absolute inset-0 border-4 border-white/20 
                          transform rotate-[72deg]"></div>
          </div>
        </div>

        {/* Additional abstract geometric shapes */}
        <div className="absolute bottom-[15%] right-[10%] w-32 h-32 border-4 border-white/20 
                      transform rotate-[15deg] animate-float">
          <div className="absolute inset-0 border-4 border-white/20 
                        transform rotate-[45deg]"></div>
        </div>

        <div className="absolute top-[45%] left-[40%] w-40 h-40 border-4 border-white/20 
                      transform -rotate-[30deg] animate-float-slow">
          <div className="absolute inset-0 border-4 border-white/20 
                        transform rotate-[60deg]"></div>
        </div>
      </div>

      {/* Main Content with backdrop blur */}
      <div className="relative z-10 grid grid-cols-12 gap-8 p-8 max-w-[2000px] mx-auto">
        {/* Left Column - Editor */}
        <div className="col-span-12 lg:col-span-8 space-y-8">
          {/* Header */}
          <div className="border-b-2 border-white pb-8">
            <h1 className="font-mono text-6xl text-white tracking-tight">
              Seraphina
            </h1>
          </div>

          {/* Main Editor */}
          <div className="space-y-4">
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Start goofing off..."
              className="w-full h-[60vh] p-6 bg-white/95 dark:bg-white/90 text-black 
                       border-2 border-white backdrop-blur-lg
                       focus:ring-0 focus:outline-none
                       font-mono text-lg resize-none
                       placeholder:text-gray-500"
            />
            
            {/* Word Count */}
            <div className="font-mono text-sm text-white">
              {content.trim() ? content.trim().split(/\s+/).length : 0} words
            </div>
          </div>
        </div>

        {/* Right Column - Controls */}
        <div className="col-span-12 lg:col-span-4 space-y-8">
          {/* Tools Section */}
          <div className="space-y-4">
            <h2 className="font-mono text-2xl text-white">Tools</h2>
            <div className="grid grid-cols-1 gap-4">
              <button
                onClick={handleGenerate}
                disabled={isGenerating}
                className="w-full p-4 bg-white text-[#0066cc] dark:text-[#003366]
                         font-mono text-lg hover:bg-white/90
                         disabled:opacity-50 disabled:cursor-not-allowed
                         transition-colors duration-200 backdrop-blur-lg"
              >
                {isGenerating ? '⚡ Processing...' : '→ Enhance Writing'}
              </button>
              <button
                className="w-full p-4 border-2 border-white 
                         text-white font-mono text-lg
                         hover:bg-white hover:text-[#0066cc]
                         dark:hover:text-[#003366]
                         transition-colors duration-200 backdrop-blur-lg"
              >
                → Fix Grammar
              </button>
              <button
                className="w-full p-4 border-2 border-white 
                         text-white font-mono text-lg
                         hover:bg-white hover:text-[#0066cc]
                         dark:hover:text-[#003366]
                         transition-colors duration-200 backdrop-blur-lg"
              >
                → Rephrase
              </button>
            </div>
          </div>

          {/* Features Grid */}
          <div className="space-y-4">
            <h2 className="font-mono text-2xl text-white">Features</h2>
            <div className="grid grid-cols-1 gap-4">
              <div className="p-4 border-2 border-white bg-white/10 backdrop-blur-lg">
                <h3 className="font-mono text-lg text-white mb-2">01 / Smart AI</h3>
                <p className="font-mono text-sm text-white/80">
                  Advanced language processing for enhanced writing
                </p>
              </div>
              <div className="p-4 border-2 border-white bg-white/10 backdrop-blur-lg">
                <h3 className="font-mono text-lg text-white mb-2">02 / Grammar</h3>
                <p className="font-mono text-sm text-white/80">
                  Professional-grade grammar correction
                </p>
              </div>
              <div className="p-4 border-2 border-white bg-white/10 backdrop-blur-lg">
                <h3 className="font-mono text-lg text-white mb-2">03 / Style</h3>
                <p className="font-mono text-sm text-white/80">
                  Context-aware style improvements
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
