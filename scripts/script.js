Attribute.add("damiud-fragment");
Events.on(ContentInitEvent, e => {
    Vars.content.block("project-big-damiud-env-wall").attributes.set(Attribute.get("damiud-fragment"), 1);
});
Attribute.add("oxygen");
Events.on(ContentInitEvent, e => {
    Vars.content.block("project-big-pionide-floor-oxygen").attributes.set(Attribute.get("oxygen"), 1);
});
Attribute.add("hydrogene");
Events.on(ContentInitEvent, e => {
    Vars.content.block("project-big-damiud-floor-hydrogene").attributes.set(Attribute.get("hydrogene"), 1);
});