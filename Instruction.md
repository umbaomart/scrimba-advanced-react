 /**
     * Challenge: We only want to run onToggle() AFTER the
     * first time rendering the component. We can use refs to
     * track whether or not it's the first time this component
     * is rendering
     *
     * 1. Create a ref called `firstRender` which defaults to `true`
     *    (Since when we first create the ref, it's true that it
     *    is the first time the component is rendering)
     * 2. In the useEffect, check if your ref's value is `true`.
     *    If it is, set it to `false`. If it isn't... can you figure
     *    it out??
     * Hint: don't forget that your boolean value will be saved
     * under `firstRender.current`, not just `firstRender`!
     */