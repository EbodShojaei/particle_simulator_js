# Dynamic Particle Simulator With Randomized Buttons
This program is a dynamic particle simulator that randomizes the colour and position of N buttons in N time.

The objects are rendered onto a canvas, which translates the positions of each canvas item.

The intention is for a highly flexible simulator that enables custom configurations and scaleable implementations.

Final distro is bundled for optimization and obfuscation of source code.

## Components
The program incorporates JavaScript for the root logic and HTML with CSS for web interfacing.

### HTML & CSS for Web Interfacing
The files below are used for interfacing the simulator logic on the client-side (i.e., front-end).
```bash
- index.html                        # web template to interface with init.js
- style.css                         # style template to render the ui designs
```

### JS for Root Logic
The files below are used for implementing the simulator logic (i.e., root program).

```bash
- init.js                           # web script drives the simulation (entry point)
  - src
    - Game.js                       # creates the simulation given N (root kernel)
    - config
      - schemas
        - buttonSchema.js           # defines the custom parameters to model a button generically onto the canvas
        - gridSchema.js             # defines the custom parameters for the canvas (e.g., color, size, position, layers)
      - objects.js                  # defines the type of objects and related properties to model using class names
    - helpers
      - state
        - controllers
          - Scheduler.js            # schedules time-based updates to state (ui scheduler)
          - StateManager.js         # manages object state per observer pings (ui manager)
        - storage
          - Memory.js               # manages memory storage and retrieval of game states (ui storage)
          - Replay.js               # handles the replay of a specific game state from memory ()
        - Observer.js               # observes (grid) the subjects (buttons) (ui listener)
        - Subject.js                # subject (button) that is watched by the observer (grid) (ui entity)
      - view
        - Displayer.js              # rehydrates UI component state to current (ui hydrator)
        - Renderer.js               # renders Datum objects into UI components (ui renderer)
      - Engine.js                   # orchestrates simulation state and sim logic (ui orchestrator)
    - models
      - factory
        - DatumFactory.js           # abstract factory to create datum ui components
        - ObjectFactory.js          # concrete factory creates object ui components
        - GridFactory.js            # concrete factory creates canvas ui components
      - obj
        - Datum.js                  # abstract datum model stores object state data
        - SimObject.js                 # concrete object of object model includes vertex prop
        - SimGrid.js                   # concrete object of grid model holds a reference to a dictionary of Datums
      - props
        - object.js                 # defines object properties
        - events.js                 # defines event handler properties
        - vertex.js                 # defines vertex properties (px, py, vx, vy)
      - ui
        - UiObject.js               # ui component for an object model (translate3d used for canvas)
        - UiGrid                    # ui component for a grid model (canvas used for view)
    - utils
      - randomUtils.js              # util functions for randomness
      - domUtils.js                 # util functions for DOM manipulation
      - validationUtils.js          # util functions for input validation
      - mathUtils.js                # util functions for math operations (e.g., vertex calculations)
  - langs
    - messages
      - en
        - cache
          - replay.js               # file accesses local storage for replay data
        - ui
          - menu.js                 # file stores all ui menu text for client-side
          - pings.js                # file stores all ui output messages for client-side
```

# Attributions
Documentation/code was reviewed/formatted by the developer and AI software (OpenAI).**

** Updated as of Sept. 8, 2024 15:22 PST by @ebodshojaei
