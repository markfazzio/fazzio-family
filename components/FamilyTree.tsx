import fazzioTree from '../json/fazzio-tree.json'
import bencivengaTree from '../json/bencivenga-tree.json'
import { Button, Card, CardFooter, Image } from '@nextui-org/react'

export default function FamilyTree(props: { family: string }) {
  const { family } = props

  const constructName = (
    firstName: string,
    lastName: string,
    maidenName?: string,
  ): string => {
    let baseString = `${firstName} ${lastName}`
    if (maidenName) baseString += ` (${maidenName})`
    return baseString
  }

  const familyTreeData = family === 'bencivenga' ? bencivengaTree : fazzioTree

  return (
    <div>
      {familyTreeData && familyTreeData.crestImageUrl ? (
        <div className="flex justify-center">
          <img src={familyTreeData.crestImageUrl} />
        </div>
      ) : undefined}
      {familyTreeData &&
        familyTreeData.generations &&
        familyTreeData.generations.map((treeGen: any) => (
          <div className="mb-3">
            <h2 className="text-2xl mb-3">Generation {treeGen.generation}</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {/* <div>Generation: {treeGen.generation}</div> */}
              {treeGen.members.map((treeMember: any) => (
                <Button
                  className="text-tiny text-white justify-end bg-black/20 w-full h-64 bg-center bg-cover"
                  variant="flat"
                  color="default"
                  radius="lg"
                  size="sm"
                  style={{
                    backgroundImage: `url("/images/no-profile-picture.svg")`,
                  }}
                >
                  <span className="pt-52 text-right text-xl">
                    {constructName(
                      treeMember.firstName,
                      treeMember.lastName,
                      treeMember.maidenName,
                    )}
                  </span>
                </Button>
              ))}
            </div>
          </div>
        ))}
    </div>
  )
}
