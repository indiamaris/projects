/* .meContainer { */
  /* position: relative; */
  /* width: 100%; */
  /* height: 100%; */
  /* display: flex; */
  /* justify-content: center; */
  /* align-items: center; */
  /* overflow: hidden; */
/* } */
/*  */
/* .meContainer::before { */
  /* content: ''; */
  /* position: absolute; */
  /* top: 50%; */
  /* left: 50%; */
  /* transform: translate(-50%, -50%); */
  /* width: 300px; */
  /* height: 300px; */
  /* background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%); */
  /* border-radius: 50%; */
  /* animation: pulse 4s ease-in-out infinite; */
  /* pointer-events: none; */
/* } */
/*  */
/* .meContainer::after { */
  /* content: ''; */
  /* position: absolute; */
  /* top: 0; */
  /* left: 0; */
  /* right: 0; */
  /* bottom: 0; */
  /* background: linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.05) 50%, transparent 70%); */
  /* animation: shimmer 6s ease-in-out infinite; */
  /* pointer-events: none; */
/* } */
/*  */
/* @keyframes pulse { */
  /* 0%, 100% {  */
    /* transform: translate(-50%, -50%) scale(1); */
    /* opacity: 0.3; */
  /* } */
  /* 50% {  */
    /* transform: translate(-50%, -50%) scale(1.1); */
    /* opacity: 0.6; */
  /* } */
/* } */
/*  */
/* @keyframes shimmer { */
  /* 0%, 100% {  */
    /* transform: translateX(-100%) translateY(-100%); */
    /* opacity: 0; */
  /* } */
  /* 50% {  */
    /* transform: translateX(100%) translateY(100%); */
    /* opacity: 0.3; */
  /* } */
/* } */
/*  */
/* .pictureWrapper { */
  /* position: relative; */
  /* z-index: 2; */
  /* overflow: hidden; */
  /* box-shadow: var(--shadow-xl); */
  /* transition: var(--transition-base); */
  /* padding: var(--space-2); */
/* } */
/*  */
/* .pictureWrapper:hover { */
  /* transform: scale(1.05) rotate(2deg); */
  /* box-shadow: var(--shadow-xl), 0 0 30px rgba(139, 69, 19, 0.3); */
/* } */
/*  */
/* .pictureWrapper::before { */
  /* content: ''; */
  /* position: absolute; */
  /* top: -2px; */
  /* left: -2px; */
  /* right: -2px; */
  /* bottom: -2px; */
  /* background: linear-gradient(45deg, var(--color-accent), var(--color-primary), var(--color-accent)); */
  /* border-radius: var(--radius-2xl); */
  /* z-index: -1; */
  /* opacity: 0; */
  /* transition: var(--transition-base); */
/* } */
/*  */
/* .pictureWrapper:hover::before { */
  /* opacity: 1; */
  /* animation: borderGlow 2s ease-in-out infinite; */
/* } */
/*  */
/* @keyframes borderGlow { */
  /* 0%, 100% {  */
    /* opacity: 0.7; */
    /* transform: scale(1); */
  /* } */
  /* 50% {  */
    /* opacity: 1; */
    /* transform: scale(1.02); */
  /* } */
/* } */
/*  */
Responsive Design
/* @media (max-width: 768px) { */
  /* .meContainer::before { */
    /* width: 200px; */
    /* height: 200px; */
  /* } */
  /*  */
  /* .pictureWrapper { */
    /* max-width: 80%; */
    /* max-height: 80%; */
  /* } */
  /*  */
  /* .pictureWrapper:hover { */
    /* transform: scale(1.02) rotate(1deg); */
  /* } */
/* } */
/*  */
/* @media (max-width: 480px) { */
  /* .meContainer::before { */
    /* width: 150px; */
    /* height: 150px; */
  /* } */
  /*  */
  /* .pictureWrapper { */
    /* max-width: 90%; */
    /* max-height: 90%; */
  /* } */
/* } */
/*  */
High contrast mode support
/* @media (prefers-contrast: high) { */
  /* .pictureWrapper { */
    /* border: 3px solid var(--color-text-primary); */
  /* } */
  /*  */
  /* .meContainer::before { */
    /* background: radial-gradient(circle, var(--color-text-primary) 0%, transparent 70%); */
  /* } */
/* } */
/*  */
Reduced motion support
/* @media (prefers-reduced-motion: reduce) { */
  /* .meContainer::before, */
  /* .meContainer::after { */
    /* animation: none; */
  /* } */
  /*  */
  /* .pictureWrapper:hover { */
    /* transform: none; */
  /* } */
  /*  */
  /* .pictureWrapper::before { */
    /* animation: none; */
  /* } */
/* } */
