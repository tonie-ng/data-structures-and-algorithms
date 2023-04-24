from collections import deque

search = deque()

graph = {}

graph["you"] = ["alice", "bob", "victor"]
graph["bob"] = ["anuj", "peggy"]
graph["alice"] = ["peggy"]
graph["claire"] = ["thom", "monny"]
graph["anuj"] = []
graph["peggy"] = []
graph["thom"] = []
graph["jonny"] = []


def person_is_seller(name):
    return name[-1] == 'm'

def search(name):
    search_queue = deque()
    search_queue += graph[name]
    searched = []
    while search_queue:
        person = search_queue.popleft()

        if not person_is_seller(person):
            print(f"{person} is not a mango seller")
            search_queue += graph[person]
            searched.append(person)
        else:
            print(f"{person} is a mango seller!")
            return True
    print("No mango sellers found!")
    return False

search("you")
