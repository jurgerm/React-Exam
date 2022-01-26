import { Card, CardContent,
     CardHeader, CardHeaderTitle,
      Content } from "../ui/Card";


export const Skill = ({ skillId, skill }) => {
    const { title, description } = skill;
    
    return (
        <Card>
            <CardHeader>
                <CardHeaderTitle>
                   {title}
                </CardHeaderTitle>
            </CardHeader>
            <CardContent>
                <Content>
                    {description}
                </Content>
            </CardContent>
        </Card>
    );
};
