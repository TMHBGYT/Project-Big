Attribute.add("damiud-fragment");
Events.on(ContentInitEvent, e => {
    Vars.content.block("project-big-damiud-env-wall").attributes.set(Attribute.get("damiud-fragment"), 1);
});