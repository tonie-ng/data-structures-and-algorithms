voted = {}

voted["tom"] = "tom"

# value = voted.get("tom")

def votername(name):
    if voted.get(name):
        print(f"Kick {name} out!")
    else:
        print(f"Allow {name} to vote")
    return

votername("tom")

