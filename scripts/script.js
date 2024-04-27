Attribute.add("damiud-fragment");
Events.on(ContentInitEvent, e => {
    Vars.content.block("pb-damiud-env-wall").attributes.set(Attribute.get("damiud-fragment"), 1);
});
Attribute.add("oxygen");
Events.on(ContentInitEvent, e => {
    Vars.content.block("pb-pionide-floor-oxygen").attributes.set(Attribute.get("oxygen"), 1);
});
Attribute.add("hydrogene");
Events.on(ContentInitEvent, e => {
    Vars.content.block("pb-damiud-floor-hydrogene").attributes.set(Attribute.get("hydrogene"), 1);
});