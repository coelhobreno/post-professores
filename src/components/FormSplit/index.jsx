import { FirstTitle, Label, Title, Input, TextArea, Button } from './styles'

export const TitleForm = ({ value }) => {
    return (
        <FirstTitle>{value}</FirstTitle>
    )
}

export const LabelInputForm = ({
    type,
    title,
    onChange,
    placeholder,
    value
}) => {
    return (
        <Label>
            <Title>{title}</Title>
            <Input
                type={type}
                onChange={onChange}
                placeholder={placeholder}
                value={value}
                required
            />
        </Label>
    )
}

export const LabelTextAreaForm = ({
    title,
    onChange,
    placeholder,
    value
}) => {
    return (
        <Label>
            <Title>{title}</Title>
            <TextArea
                type="text"
                onChange={onChange}
                placeholder={placeholder}
                value={value}
                required
            />
        </Label>
    )
}

export const ButtonForm = ({ value }) => {
    return (
        <Button type='submit'>{value}</Button>
    )
}